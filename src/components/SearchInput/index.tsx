import { FC } from 'react'
import { Form, FormControlProps } from 'react-bootstrap'
import './styles.css'

type SearchInputProps = FormControlProps & {
	placeholder?: string
}

const SearchInput: FC<SearchInputProps> = props => {
	const { placeholder = 'Buscar...', ...restProps } = props

	return (
		<Form.Control
			placeholder={placeholder}
			className='search-input'
			{...restProps}
		/>
	)
}

export default SearchInput
