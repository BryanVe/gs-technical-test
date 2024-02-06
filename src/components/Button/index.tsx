import { FC } from 'react'
import {
	Button as BSButton,
	ButtonProps as BSButtonProps
} from 'react-bootstrap'

type ButtonProps = BSButtonProps & {
	icon?: string
	fullWidth?: boolean
}

const Button: FC<ButtonProps> = props => {
	const { children, className, fullWidth = false, icon, ...restProps } = props

	return (
		<BSButton
			size="sm"
			variant="outline-primary"
			className={['px-4', fullWidth ? 'w-100' : '', className].join(' ')}
			{...restProps}
		>
			{icon && <i className={`me-2 bi ${icon}`} />}
			{children}
		</BSButton>
	)
}

export default Button
