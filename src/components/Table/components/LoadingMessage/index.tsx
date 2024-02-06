import { Spinner } from 'react-bootstrap'
import Message from '../Message'

const LoadingMessage = () => (
	<Message>
		<Spinner animation='border' />
	</Message>
)
export default LoadingMessage
