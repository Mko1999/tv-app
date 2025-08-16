import * as React from 'react'
import cx from 'classnames'

type CustomImageProps = {
  src: string
  alt?: string
  width?: number | string
  height?: number | string
  className?: string
}

export type FixedSrcImageProps = Omit<CustomImageProps, 'src'>

const CustomImage: React.FC<CustomImageProps> = ({ src, alt = '', width, height, className }) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={cx(className, 'custom-image')}
    loading='lazy'
  />
)

export default CustomImage
