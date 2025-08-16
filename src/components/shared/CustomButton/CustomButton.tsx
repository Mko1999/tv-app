import cx from 'classnames'
import { isNil } from 'lodash'

import './CustomButton.scss'

export type CustomButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  startAdornment?: React.ReactNode
  children?: React.ReactNode
  textOverflow?: 'ellipsis' | 'wrap'
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  startAdornment,
  children,
  className,
  type = 'button',
  disabled,
  textOverflow = 'wrap',
  ...rest
}) => {
  const classes = cx('custom-button', { 'custom-button--disabled': disabled }, className)

  return (
    <button type={type} className={classes} {...rest}>
      {!isNil(startAdornment) && startAdornment}
      {!isNil(children) && (
        <p className={cx('custom-button__text', `custom-button__text--${textOverflow}`)}>
          {children}
        </p>
      )}
    </button>
  )
}

export default CustomButton
