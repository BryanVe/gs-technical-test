// import { getUsers } from './network/users'
// import { useQuery } from '@tanstack/react-query'

import { Col, Container, Row, Stack } from 'react-bootstrap'
import { Button, Navbar } from './components'
import { constants } from './config'

const App = () => {
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
				<Row>
					<Col>
						<div className="dt-title">
							<h1 className="h2">Mi tabla</h1>
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
				</Row>
			</Container>
		</>
	)
}

export default App
