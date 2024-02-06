export const flatUser = (userDTO: UserDTO): User => {
	const { login, name, ...restUserDTO } = userDTO

	return {
		...restUserDTO,
		id: login.uuid,
		name: `${name.first} ${name.last}`
	}
}

export const flatUsers = (userDTOs: UserDTO[]) => userDTOs.map(flatUser)
