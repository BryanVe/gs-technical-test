type TableDefaultDataItem = {
	id: string
	[key: string]: unknown
}

type TableColumns<TDataItem extends TableDefaultDataItem> = {
	id: string
	label: string
	path?: string
	tdClassName?: string
	thStyle?: React.HTMLProps<HTMLTableHeaderCellElement>['style']
	tdStyle?: React.HTMLProps<HTMLTableDataCellElement>['style']
	render?: (data: TDataItem) => import('react').ReactNode
}[]
