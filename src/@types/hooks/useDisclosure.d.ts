type Disclosure = {
	open: boolean
	onOpen: () => void
	onClose: () => void
	onToggle: () => void
}

type UseDisclosure = (initialValue?: boolean) => Disclosure
