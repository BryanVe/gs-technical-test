import { FC } from 'react'
import { Form, FormControlProps } from 'react-bootstrap'
import './styles.css'

type InputProps = FormControlProps & {
	placeholder?: string
}

const Input: FC<InputProps> = props => {
	return <Form.Control className='regular-input' {...props} />
}

export default Input
