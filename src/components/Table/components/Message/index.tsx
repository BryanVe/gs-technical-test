import { FC, PropsWithChildren } from 'react'

type MessageProps = PropsWithChildren

const Message: FC<MessageProps> = props => {
	const { children } = props

	return (
		<div
			className='bg-white'
			style={{
				height: 264,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '1rem',
				flexDirection: 'column'
			}}
		>
			{children}
		</div>
	)
}

export default Message
