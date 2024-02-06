import { FC } from 'react'
import { Form, FormControlProps } from 'react-bootstrap'
import './styles.css'

type InputVariants = 'regular' | 'search'
const classNames: Record<InputVariants, string> = {
	regular: 'regular-input',
	search: 'search-input'
}

type InputProps = FormControlProps & {
	variant?: 'regular' | 'search'
	placeholder?: string
}

const Input: FC<InputProps> = props => {
	const { variant = 'regular', placeholder, className, ...restProps } = props

	return (
		<Form.Control
			placeholder={
				variant === 'search' && !placeholder ? 'Buscar...' : placeholder
			}
			className={[classNames[variant], className].join(' ')}
			{...restProps}
		/>
	)
}

export default Input
