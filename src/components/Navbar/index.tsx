import { Container, Image, Navbar } from 'react-bootstrap'

type NavbarProps = {
	logoAlt: string
	logoSrc: string
	logoHeight?: number
}

const InternalNavbar: React.FC<NavbarProps> = props => {
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
