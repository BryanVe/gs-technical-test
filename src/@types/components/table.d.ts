type SortDirection = 'asc' | 'desc'
type TableMode = 'read' | 'edit'
type TableDefaultDataItem = {
	id: string
	[key: string]: unknown
}

type TableColumns = {
	id: string
	label: string
	path?: string
	sortable?: boolean
	tdClassName?: string
	thStyle?: React.HTMLProps<HTMLTableHeaderCellElement>['style']
	tdStyle?: React.HTMLProps<HTMLTableDataCellElement>['style']
}[]
