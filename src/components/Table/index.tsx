import { ReactNode, useState } from 'react'
import { Table as BSTable, Form, FormControlProps } from 'react-bootstrap'
import { Input, SearchInput } from '~/components'
import { EmptyMessage, LoadingMessage, Pagination } from './components'
import './styles.css'

type TableProps<TDataItem extends TableDefaultDataItem> = {
	mode?: TableMode
	loadingData?: boolean
	columns: TableColumns
	data?: TDataItem[]
	height?: number
	enablePagination?: boolean
	page: string
	updatePage: (page: string) => void
	updateResults: (results: string) => void
	selectItem: (item: TDataItem) => void
	selectAllItems: () => void
	selectedItemIDs: string[]
	onItemInputsChange: (item: TDataItem, key: string, value: string) => void
}

function Table<TDataItem extends TableDefaultDataItem>(
	props: TableProps<TDataItem>
) {
	const {
		mode = 'read',
		loadingData = false,
		columns,
		enablePagination = false,
		data,
		height = 300,
		page,
		selectedItemIDs,
		updatePage,
		updateResults,
		selectItem,
		selectAllItems,
		onItemInputsChange
	} = props
	const [searchString, setSearchString] = useState('')
	const filteredData = (data ?? []).filter(
		item =>
			JSON.stringify(item).toLowerCase().indexOf(searchString.toLowerCase()) >
			-1
	)

	const handleSearchStringChange: FormControlProps['onChange'] = event =>
		setSearchString(event.target.value)

	return (
		<>
			<SearchInput value={searchString} onChange={handleSearchStringChange} />
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
								<Form.Check
									type='checkbox'
									onChange={selectAllItems}
									checked={
										data &&
										data.length > 0 &&
										selectedItemIDs.length === data.length
									}
								/>
							</th>
							{columns.map(column => (
								<th key={column.id} style={column.thStyle}>
									{column.label}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{!loadingData &&
							filteredData.map(item => (
								<tr key={item.id}>
									<td>
										<Form.Check
											type='checkbox'
											onChange={() => selectItem(item)}
											checked={selectedItemIDs.includes(item.id)}
										/>
									</td>
									{columns.map(column => (
										<td
											key={column.id}
											className={column.tdClassName}
											style={column.tdStyle}
										>
											{mode === 'read' ? (
												(item[column.id] as ReactNode)
											) : (
												<Input
													size='sm'
													value={item[column.id] as string}
													onChange={event =>
														onItemInputsChange(
															item,
															column.id,
															event.target.value
														)
													}
												/>
											)}
										</td>
									))}
								</tr>
							))}
					</tbody>
				</BSTable>
				{loadingData && <LoadingMessage />}
				{filteredData.length === 0 && <EmptyMessage />}
			</div>
			{enablePagination && (
				<Pagination
					count={filteredData.length}
					page={page}
					updatePage={updatePage}
					updateResults={updateResults}
				/>
			)}
		</>
	)
}

export default Table
