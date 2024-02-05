import { Container, Image, Navbar } from 'react-bootstrap'

type InternalNavbarProps = {
	logoAlt: string
	logoSrc: string
	logoHeight?: number
}

const InternalNavbar: React.FC<InternalNavbarProps> = props => {
	const { logoAlt, logoSrc, logoHeight = 30 } = props

	return (
		<Navbar expand="lg" bg="dark">
			<Container fluid>
				<Navbar.Brand href="#" className="mx-auto">
					<Image src={logoSrc} alt={logoAlt} height={logoHeight} />
				</Navbar.Brand>
			</Container>
		</Navbar>
	)
}

export default InternalNavbar
