import { ReactNode } from 'react'
import { Table as BSTable, Form, Spinner } from 'react-bootstrap'
import { Pagination } from './components'
import './styles.css'

type TableProps<TDataItem extends TableDefaultDataItem> = {
	loadingData?: boolean
	columns: TableColumns<TDataItem>
	data?: TDataItem[]
	height?: number
	enablePagination?: boolean
	page?: string
	results?: string
	updatePage: (page: string) => void
	updateResults: (results: string) => void
}

function Table<TDataItem extends TableDefaultDataItem>(
	props: TableProps<TDataItem>
) {
	const {
		loadingData = false,
		columns,
		enablePagination = false,
		data,
		height = 300,
		page,
		results,
		updatePage,
		updateResults
	} = props

	return (
		<>
			<div
				style={{
					height,
					maxHeight: height,
					overflowY: 'auto'
				}}
			>
				<BSTable hover responsive className='mb-0'>
					<thead>
						<tr>
							<th>
								<Form.Check type='checkbox' />
							</th>
							{columns.map(column => (
								<th key={column.id}>{column.label}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{!loadingData &&
							(data ?? []).map(item => (
								<tr key={item.id}>
									<td>
										<Form.Check type='checkbox' />
									</td>
									{columns.map(column => (
										<td
											key={column.id}
											className={column.tdClassName}
											style={column.tdStyle}
										>
											{column.render
												? column.render(item)
												: (item[column.id] as ReactNode)}
										</td>
									))}
								</tr>
							))}
					</tbody>
				</BSTable>
				{loadingData && (
					<div
						className='bg-white'
						style={{
							height: 264,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Spinner animation='border' />
					</div>
				)}
			</div>
			{data && enablePagination && (
				<Pagination
					page={page}
					results={results}
					updatePage={updatePage}
					updateResults={updateResults}
				/>
			)}
		</>
	)
}

export default Table
