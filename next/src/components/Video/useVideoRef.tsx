import { useCallback, useEffect, useRef, useState } from 'react'

// https://stackoverflow.com/a/60476525
export function useVideoRef() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [videoBox, setVideoBox] = useState<DOMRect | null>(null)

  const videoRefCallback = useCallback((node: HTMLVideoElement | null) => {
    videoRef.current = node
    if (!node) return
    const boundingBox = node.getBoundingClientRect()
    setVideoBox(boundingBox)
  }, [])

  const handleResize = useCallback(() => {
    videoRefCallback(videoRef.current!)
  }, [videoRefCallback])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return { videoBox, videoRef, videoRefCallback }
}
