import cx from 'classnames'
import { isNil } from 'lodash'

import './CustomButton.scss'
import classNamesConstructor from '../../../utils/classNamesUtils'

export type CustomButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  startAdornment?: React.ReactNode
  children?: React.ReactNode
  textOverflow?: 'ellipsis' | 'wrap'
}

const { baseClassname } = classNamesConstructor('custom-button')

export const CustomButton: React.FC<CustomButtonProps> = ({
  startAdornment,
  children,
  className,
  type = 'button',
  disabled,
  textOverflow = 'wrap',
  ...rest
}) => {
  const classes = cx(baseClassname(), baseClassname('--disabled', !!disabled), className)

  return (
    <button type={type} className={classes} disabled={disabled} {...rest}>
      {!isNil(startAdornment) && startAdornment}
      {!isNil(children) && (
        <p className={cx(baseClassname('__text'), baseClassname(`__text--${textOverflow}`))}>
          {children}
        </p>
      )}
    </button>
  )
}

export default CustomButton
