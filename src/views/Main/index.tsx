// import { getUsers } from './network/users'
// import { useQuery } from '@tanstack/react-query'

import { Container } from 'react-bootstrap'
import { constants } from '~/config'
import { Filters, Navbar } from './components'

const Main = () => {
	// const { data: users, isLoading: isLoadingUsers } = useQuery({
	// 	queryKey: ['getUsers'],
	// 	queryFn: getUsers,
	// })

	// console.log({ users, isLoadingUsers })

	return (
		<>
			<Navbar
				logoAlt={constants.BRAND_NAME}
				logoSrc={constants.BRAND_LOGO_SRC}
			/>
			<Container className="pt-5">
				<Filters />
				{/* <Row>
					<Col>
						<div className="dt-title">
							<h1 className="h2">
								<strong>Mi tabla</strong>
							</h1>
						</div>
					</Col>
					<Col xs="auto">
						<Stack direction="horizontal" gap={2}>
							<Button icon="bi-sliders" size="sm" variant="outline-primary">
								Filtros
							</Button>
							<Button icon="bi-pencil" size="sm" variant="outline-primary">
								Editar
							</Button>
							<Button icon="bi-trash3" size="sm" variant="outline-danger">
								Eliminar
							</Button>
						</Stack>
					</Col>
				</Row> */}
			</Container>
		</>
	)
}

export default Main
