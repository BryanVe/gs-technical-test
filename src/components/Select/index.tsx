import { FC, useEffect, useState } from 'react'
import {
	Dropdown,
	DropdownProps,
	Form,
	FormControlProps
} from 'react-bootstrap'
import './styles.css'

type SelectProps = {
	options: string[]
	label: string
}

const Select: FC<SelectProps> = props => {
	const { options, label } = props
	const [selectedOption, setSelectedOption] = useState(options[0])
	const [searchString, setSearchString] = useState('')

	const selectOption: DropdownProps['onSelect'] = option => {
		setSelectedOption(option as string)
		setSearchString('')
	}

	const handleSearchStringChange: FormControlProps['onChange'] = event =>
		setSearchString(event.target.value)

	useEffect(() => {
		console.log('asdasd')
	}, [])

	return (
		<Dropdown onSelect={selectOption}>
			<Dropdown.Toggle variant="outline-secondary">
				{selectedOption.toUpperCase()}
			</Dropdown.Toggle>

			<Dropdown.Menu className="w-100 mt-2">
				<div className="px-2">
					<Form.Control
						autoFocus
						className="w-100 mb-3"
						placeholder="Buscar..."
						onChange={handleSearchStringChange}
						value={searchString}
					/>
				</div>
				<Dropdown.Header className="h6 px-4 bg-secondary text-bg-secondary text-start">
					{label}
				</Dropdown.Header>
				{options
					.filter(
						option =>
							option
								.toLocaleLowerCase()
								.indexOf(searchString.toLocaleLowerCase()) > -1
					)
					.map(option => (
						<Dropdown.Item
							key={option}
							active={option === selectedOption}
							eventKey={option}
							className="px-4"
						>
							{option.toUpperCase()}
						</Dropdown.Item>
					))}
			</Dropdown.Menu>
		</Dropdown>
	)
}

export default Select
