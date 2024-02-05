// import { getUsers } from './network/users'
// import { useQuery } from '@tanstack/react-query'

import { Navbar } from './components'
import { constants } from './config'

const App = () => {
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
		</>
	)
}

export default App
