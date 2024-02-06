import { FC } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Select } from '~/components'
import { constants } from '~/config'

type FiltersProps = {
	gender: string
	nat: string
	updateGender: (gender: string) => void
	updateNat: (nat: string) => void
}

const Filters: FC<FiltersProps> = props => {
	const { gender, nat, updateGender, updateNat } = props

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
