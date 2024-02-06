import { useContext } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Select } from '~/components'
import { constants } from '~/config'
import { GetUsersContext } from '../../context'

const Filters = () => {
	const { gender, nat, updateGender, updateNat } = useContext(
		GetUsersContext
	) as TGetUsersContext

	return (
		<Card border='0' className='shadow-sm'>
			<Card.Body className='py-4'>
				<Form>
					<Container>
						<Row className='g-3'>
							<Col xs={12} md>
								<Select
									label='GÉNERO'
									options={constants.GENDERS}
									onSelect={updateGender}
									value={gender}
								/>
							</Col>
							<Col xs={12} md>
								<Select
									label='NACIONALIDAD'
									options={constants.NATIONALITIES}
									onSelect={updateNat}
									value={nat}
								/>
							</Col>
						</Row>
					</Container>
				</Form>
			</Card.Body>
		</Card>
	)
}

export default Filters
