import Message from '../Message'

const EmptyMessage = () => (
	<Message>
		<p
			className='h6'
			style={{
				fontSize: '0.85em'
			}}
		>
			No se encontró usuarios
		</p>
	</Message>
)

export default EmptyMessage
