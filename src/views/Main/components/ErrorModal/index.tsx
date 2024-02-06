import { FC, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { GetUsersContext } from '../../context'

type ErrorModalProps = {
	defaultMessage: string
}

const ErrorModal: FC<ErrorModalProps> = props => {
	const { defaultMessage } = props
	const { errorModalOpened, errorUserMessage, closeErrorModal } = useContext(
		GetUsersContext
	) as TGetUsersContext

	return (
		<Modal show={errorModalOpened} onHide={closeErrorModal} centered>
			<Modal.Body>
				<h5>Error</h5>
				<h6>
					{errorUserMessage && errorUserMessage.length > 0
						? errorUserMessage
						: defaultMessage}
				</h6>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={closeErrorModal}>Cerrar</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default ErrorModal
