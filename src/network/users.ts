import { flatUsers } from '~/utils'
import { axiosInstance } from '.'

export const getUsers = async (params: GetUsersParams) => {
	const response = await axiosInstance.get<GetUsersResponse>('/', {
		params
	})

	return flatUsers(response.data.results)
}
