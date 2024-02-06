import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Button, Select } from '~/components'
import { constants } from '~/config'

const Filters = () => {
	return (
		<Card border="0" className="shadow-sm">
			<Card.Body className="py-4">
				<Form>
					<Container>
						<Row className="g-3">
							<Col xs={12} md>
								<Select label="GÉNERO" options={constants.GENDERS} />
							</Col>
							<Col xs={12} md>
								<Select
									label="NACIONALIDAD"
									options={constants.NATIONALITIES}
								/>
							</Col>
							<Col xs={12} md="auto">
								<Button fullWidth icon="bi-search" size="sm" variant="primary">
									Buscar
								</Button>
							</Col>
						</Row>
					</Container>
				</Form>
			</Card.Body>
		</Card>
	)
}

export default Filters
