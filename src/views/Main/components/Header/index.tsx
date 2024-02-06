import { FC, useContext } from 'react'
import { ButtonProps, Col, Row, Stack } from 'react-bootstrap'
import { Button } from '~/components'
import { GetUsersContext } from '../../context'

type Action = {
	icon: string
	label: string
	size: ButtonProps['size']
	variant: ButtonProps['variant']
	disabled?: ButtonProps['disabled']
	onClick: ButtonProps['onClick']
}

type HeaderProps = {
	toggleExpandedFilters: () => void
}

const Header: FC<HeaderProps> = props => {
	const { toggleExpandedFilters } = props
	const { selectedUserIDs, removeUsers, usersTableMode, updateUsersTableMode } =
		useContext(GetUsersContext) as TGetUsersContext
	const disableAction = selectedUserIDs.length === 0
	const actions: Action[] = [
		{
			icon: 'bi-sliders',
			label: 'Filtros',
			size: 'sm',
			variant: 'outline-primary',
			onClick: toggleExpandedFilters
		},
		{
			icon: usersTableMode === 'edit' ? 'bi-save2' : 'bi-pencil',
			label: usersTableMode === 'edit' ? 'Guardar' : 'Editar',
			size: 'sm',
			variant: 'outline-primary',
			onClick: () =>
				updateUsersTableMode(usersTableMode === 'edit' ? 'read' : 'edit')
		},
		{
			icon: 'bi-trash3',
			label: 'Eliminar',
			size: 'sm',
			variant: disableAction ? 'outline-secondary' : 'outline-danger',
			disabled: disableAction,
			onClick: removeUsers
		}
	]

	return (
		<Row className='g-2'>
			<Col xs={12} md>
				<h1 className='h2'>
					<b>Mi tabla</b>
				</h1>
			</Col>
			<Col xs={12} md='auto'>
				<Stack direction='horizontal' gap={2}>
					{actions.map(({ icon, label, size, variant, disabled, onClick }) => (
						<Button
							key={icon}
							icon={icon}
							size={size}
							disabled={disabled}
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
