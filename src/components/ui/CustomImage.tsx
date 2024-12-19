'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ImageProperties {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  blurDataURL?: string
}

function CustomImage({ src, alt, ...props }: ImageProperties) {
  const fallbackImage = props.blurDataURL ?? '/images/image-not-found.webp'
  const [imgSource, setImgSource] = useState(src || fallbackImage)

  return (
    <Image
      src={imgSource}
      width={props.width ?? 100}
      height={props.height ?? 100}
      alt={alt || 'Image'}
      className={props.className}
      priority={props.priority || true}
      placeholder="blur"
      blurDataURL={fallbackImage}
      onError={() => setImgSource(fallbackImage)}
      {...props}
    />
  )
}

export default CustomImage
