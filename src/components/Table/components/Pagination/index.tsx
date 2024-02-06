import { FC } from 'react'
import {
	Stack,
	Pagination as BSPagination,
	Form,
	Row,
	Col,
	FormSelectProps
} from 'react-bootstrap'
import { constants } from '~/config'
import './style.css'

type PaginationProps = {
	count: number
	page: string
	updatePage: (page: string) => void
	updateResults: (results: string) => void
}

const Pagination: FC<PaginationProps> = props => {
	const { count, page, updatePage, updateResults } = props
	const disablePreviousPage = parseInt(page) - 1 < 1

	const setPreviousPage = () => {
		const previousPage = parseInt(page) - 1
		if (previousPage < 1) return

		updatePage(previousPage.toString())
	}

	const setNextPage = () => {
		const nextPage = parseInt(page) + 1
		updatePage(nextPage.toString())
	}

	const handleResultsChange: FormSelectProps['onChange'] = event =>
		updateResults(event.target.value)

	return (
		<Row className='g-2'>
			<Col xs={12} sm className='center-sm'>
				<Stack gap={1}>
					<Stack direction='horizontal' gap={2}>
						<h6
							className='mb-0'
							style={{
								fontSize: 14
							}}
						>
							{count} registros encontrados
						</h6>
					</Stack>
					<Stack direction='horizontal' gap={2}>
						<h6
							className='mb-0'
							style={{
								fontSize: 14
							}}
						>
							Entradas por página:
						</h6>
						<Form.Select
							size='sm'
							className='w-auto'
							onChange={handleResultsChange}
						>
							{constants.PAGE_SIZES.map(size => (
								<option key={size} value={size}>
									{size}
								</option>
							))}
						</Form.Select>
					</Stack>
				</Stack>
			</Col>
			<Col xs={12} sm='auto' className='center-sm'>
				<BSPagination size='sm'>
					<BSPagination.First
						disabled={disablePreviousPage}
						onClick={setPreviousPage}
					>
						Anterior
					</BSPagination.First>
					<BSPagination.Item active>{page}</BSPagination.Item>
					<BSPagination.Next onClick={setNextPage}>Siguiente</BSPagination.Next>
				</BSPagination>
			</Col>
		</Row>
	)
}

export default Pagination
