// import { getUsers } from './network/users'
// import { useQuery } from '@tanstack/react-query'

import { Collapse, Container, Stack } from 'react-bootstrap'
import { constants } from '~/config'
import { Filters, Header, Navbar } from './components'
import { useDisclosure } from '~/hooks'

const Main = () => {
	const { open: expandedFilters, onToggle: toggleExpandedFilters } =
		useDisclosure()
	// const { data: users, isLoading: isLoadingUsers } = useQuery({
	// 	queryKey: ['getUsers'],
	// 	queryFn: getUsers,
	// })

	// console.log({ users, isLoadingUsers })

	return (
		<>
			<Navbar
				logoAlt={constants.BRAND_NAME}
				logoSrc={constants.BRAND_LOGO_SRC}
			/>
			<Container className="pt-5">
				<Stack gap={4}>
					<Header toggleExpandedFilters={toggleExpandedFilters} />
					<Collapse in={expandedFilters}>
						{/*
						wrap Filters component in a div for smooth animation purposes
						Ref: https://react-bootstrap.netlify.app/docs/utilities/transitions#horizontal 
					*/}
						<div>
							<Filters />
						</div>
					</Collapse>
					asdasds
				</Stack>
			</Container>
		</>
	)
}

export default Main
