import { getUsers } from './network/users'
import { useQuery } from '@tanstack/react-query'

const App = () => {
	const { data: users, isLoading: isLoadingUsers } = useQuery({
		queryKey: ['getUsers'],
		queryFn: getUsers
	})

	console.log({ users, isLoadingUsers })

	return <h1>Initial code</h1>
}

export default App
