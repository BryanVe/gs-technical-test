type Gender = 'male' | 'female'
type UserName = {
	title: string
	first: string
	last: string
}
type UserLogin = {
	uuid: string
}
type UserDTO = {
	gender: Gender
	email: string
	phone: string
	cell: string
	nat: string
	name: UserName
	login: UserLogin
}
type User = Omit<UserDTO, 'login' | 'name'> & {
	id: string
	name: string
}
