import { FC } from 'react'
import { ButtonProps, Col, Row, Stack } from 'react-bootstrap'
import { Button } from '~/components'

type Action = {
	icon: string
	label: string
	size: ButtonProps['size']
	variant: ButtonProps['variant']
	onClick: ButtonProps['onClick']
}

type HeaderProps = {
	toggleExpandedFilters: () => void
}

const Header: FC<HeaderProps> = props => {
	const { toggleExpandedFilters } = props
	const actions: Action[] = [
		{
			icon: 'bi-sliders',
			label: 'Filtros',
			size: 'sm',
			variant: 'outline-primary',
			onClick: toggleExpandedFilters
		},
		{
			icon: 'bi-pencil',
			label: 'Editar',
			size: 'sm',
			variant: 'outline-primary',
			onClick: () => console.log('edit entry')
		},
		{
			icon: 'bi-trash3',
			label: 'Eliminar',
			size: 'sm',
			variant: 'outline-danger',
			onClick: () => console.log('delete entry')
		}
	]

	return (
		<Row>
			<Col xs={12} md>
				<h1 className="h2">
					<b>Mi tabla</b>
				</h1>
			</Col>
			<Col xs={12} md="auto">
				<Stack direction="horizontal" gap={2}>
					{actions.map(({ icon, label, size, variant, onClick }) => (
						<Button
							key={icon}
							icon={icon}
							size={size}
							variant={variant}
							onClick={onClick}
						>
							{label}
						</Button>
					))}
				</Stack>
			</Col>
		</Row>
	)
}

export default Header
