import { FC } from 'react'
import { Container, Image, Navbar as BSNavbar } from 'react-bootstrap'

type NavbarProps = {
	logoAlt: string
	logoSrc: string
	logoHeight?: number
}

const Navbar: FC<NavbarProps> = props => {
	const { logoAlt, logoSrc, logoHeight = 30 } = props

	return (
		<BSNavbar expand="lg" bg="dark">
			<Container fluid>
				<BSNavbar.Brand href="#" className="mx-auto">
					<Image src={logoSrc} alt={logoAlt} height={logoHeight} />
				</BSNavbar.Brand>
			</Container>
		</BSNavbar>
	)
}

export default Navbar
