import { CSSProperties, useEffect, useState } from 'react'
import { useVideoRef } from './useVideoRef'
import { throttle } from '../../lib/throttle'
import { PlayButton } from '../icons/PlayButton'
import { assetPathFor, assetH, assetW } from '../../assets/assets.mjs'

type VideoProps = {
  mp4: string
}

function mp4_to_png(mp4: string): string {
  if (!mp4.endsWith(".mp4")) {
    throw Error("Expected to end with `.mp4`, was " + mp4)
  }
  return mp4.slice(0, mp4.length - "mp4".length) + "png"
}

export function Video(props: VideoProps) {
  const [showOverlay, setShowOverlay] = useState<boolean>(true)
  function hideOverlay() {
    setShowOverlay(false)
    videoRef.current!.play()
  }

  const [isScrubbing, setIsScrubbing] = useState<boolean>(false)
  const [progressBarWidth, setProgressBarWidth] = useState<number>(0)
  const { videoBox, videoRef, videoRefCallback } = useVideoRef()

  function onTouchStart() {
    videoRef.current!.pause()
  }
  function onTouchEnd() {
    videoRef.current!.play()
  }
  function onMouseEnter() {
    if (showOverlay) return
    videoRef.current!.play()
    setIsScrubbing(false)
  }
  function onMouseLeave() {
    if (showOverlay) return
    videoRef.current!.pause()
  }
  function onTimeUpdate(event: React.SyntheticEvent<HTMLVideoElement>) {
    if (showOverlay) return
    const { currentTime, duration } = event.currentTarget
    const progressPercentage = Math.floor((100 / duration) * currentTime)
    setProgressBarWidth(progressPercentage)
  }
  function onMouseDown(event: React.MouseEvent<HTMLVideoElement>) {
    if (showOverlay) return
    videoRef.current!.pause()
    setIsScrubbing(true)
    scrubVideoToCursorPosition(event, videoBox!)
  }
  function onMouseMove(event: React.MouseEvent<HTMLVideoElement>) {
    if (showOverlay) return
    scrubVideoToCursorPosition(event, videoBox!)
  }
  function onMouseUp() {
    if (showOverlay) {
      hideOverlay()
      return
    }
    videoRef.current!.play()
    onDocumentMouseUp()
  }
  function onDocumentMouseUp() {
    setIsScrubbing(false)
  }

  const progressBarStyle: CSSProperties = {
    width: `${progressBarWidth}%`,
  }
  if (!isScrubbing) {
    // Makes the animations smoother
    progressBarStyle.transition = 'all 0.25s linear'
  }

  useEffect(() => {
    document.addEventListener('mouseup', onDocumentMouseUp)
    return () => {
      document.removeEventListener('mouseup', onDocumentMouseUp)
    }
  }, [])

  return (
    <div>
      <span className={'inline-block relative'}>
        {showOverlay && (
          <div
            className={
              'pointer-events-none absolute left-0 top-[3px] z-20 flex bottom-0 right-0 items-center justify-center bg-gray opacity-50'
            }
            onMouseEnter={hideOverlay}
          >
            <PlayButton />
          </div>
        )}
        <div className="relative z-10 h-1">
          <div className="h-full bg-blue-700" style={progressBarStyle}></div>
        </div>
        <video
          muted={true}
          className="relative z-10 m-0 cursor-play"
          width={assetW(mp4_to_png(props.mp4))}
          height={assetH(mp4_to_png(props.mp4))}
          poster={assetPathFor(mp4_to_png(props.mp4))}
          loop={true}
          ref={videoRefCallback}
          playsInline={true}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onTimeUpdate={onTimeUpdate}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onMouseMove={isScrubbing ? throttle(onMouseMove, 100) : undefined}
        >
          <source src={assetPathFor(props.mp4)} type="video/mp4" />
          <img
            className="video__alt"
            src={assetPathFor(mp4_to_png(props.mp4))}
            width={assetW(mp4_to_png(props.mp4))}
            height={assetH(mp4_to_png(props.mp4))} />
        </video>
      </span>
    </div>
  )
}

function scrubVideoToCursorPosition(
  event: React.MouseEvent<HTMLVideoElement>,
  boundingBox: DOMRect
) {
  const videoElement = event.currentTarget
  if (!videoElement) return // In theory it shouldn't ever be null. In practice it is sometimes.
  const pixelsIntoVideo = event.clientX - boundingBox.left
  videoElement.currentTime =
    (videoElement.duration * pixelsIntoVideo) / boundingBox.width
}
