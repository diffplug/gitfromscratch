import { CSSProperties, useEffect, useState } from 'react'
import { useVideoRef } from './useVideoRef'
import { throttle } from '../../lib/throttle'
import { PlayButton } from '../icons/PlayButton'

type VideoProps = {
  poster: string
  source: string // must be mp4 video
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
    <div className={'relative w-[589px] max-w-full'}>
      {showOverlay && (
        <div
          className={
            'pointer-events-none absolute left-0 top-[3px] z-20 flex h-[394px] max-h-full w-[589px] max-w-full items-center justify-center bg-gray opacity-50'
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
        width={589}
        height={394}
        poster={props.poster}
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
        onMouseMove={isScrubbing ? throttle(onMouseMove, 100, {}) : undefined}
      >
        <source src={props.source} type="video/mp4" />
        <img className="video__alt" src={props.poster} />
      </video>
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
