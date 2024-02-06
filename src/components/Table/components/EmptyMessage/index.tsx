import { Image } from 'react-bootstrap'
import Message from '../Message'
import noDataImage from '~/assets/images/no_data.png'

const EmptyMessage = () => (
	<Message>
		<Image
			alt='No se encontró resultados'
			src={noDataImage}
			style={{
				width: 80
			}}
		/>
		<p
			className='h6'
			style={{
				fontSize: '0.9em'
			}}
		>
			No se encontró resultados
		</p>
	</Message>
)

export default EmptyMessage
