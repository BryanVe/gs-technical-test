import { FC } from 'react'
import { Image } from 'react-bootstrap'
import Message from '../Message'
import noDataImage from '~/assets/images/no_data.png'

type EmptyMessageProps = {
	message: string
}

const EmptyMessage: FC<EmptyMessageProps> = props => {
	const { message } = props

	return (
		<Message>
			<Image
				alt={message}
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
				{message}
			</p>
		</Message>
	)
}

export default EmptyMessage
