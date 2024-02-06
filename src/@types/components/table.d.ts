type TableDefaultDataItem = {
	id: string
	[key: string]: unknown
}

type TableColumns<TDataItem extends TableDefaultDataItem> = {
	id: string
	label: string
	path?: string
	tdClassName?: string
	tdStyle?: React.HTMLProps<HTMLTableDataCellElement>['style']
	render?: (data: TDataItem) => import('react').ReactNode
}[]
