import axios from 'axios'
import { keys } from '~/config'

export const axiosInstance = axios.create({
	baseURL: keys.API_URL
})
