import { Button, ButtonProps } from 'react-bootstrap'

type InternalButtonProps = ButtonProps & {
	icon?: string
}

const InternalButton: React.FC<InternalButtonProps> = props => {
	const { children, className, icon, ...restProps } = props

	return (
		<Button
			size="sm"
			variant="outline-primary"
			className={['px-4', className].join(' ')}
			{...restProps}
		>
			{icon && <i className={`me-2 bi ${icon}`} />}
			{children}
		</Button>
	)
}

export default InternalButton
