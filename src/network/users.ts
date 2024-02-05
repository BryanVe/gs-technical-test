import { axiosInstance } from '.'

export const getUsers = async () => {
	const users = await axiosInstance.get('/', {
		params: {
			results: 10
		}
	})

	return users.data
}
