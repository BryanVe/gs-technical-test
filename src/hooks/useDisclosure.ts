import { useState } from 'react'

const useDisclosure: UseDisclosure = initialValue => {
	const [open, setOpen] = useState(initialValue ?? false)

	const onOpen = () => setOpen(true)
	const onClose = () => setOpen(false)
	const onToggle = () => setOpen(!open)

	return {
		open,
		onOpen,
		onClose,
		onToggle
	}
}

export default useDisclosure
