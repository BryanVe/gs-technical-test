type TGetUsersContext = Required<GetUsersParams> & {
	updatePage: (page: string) => void
	updateResults: (results: string) => void
	updateGender: (gender: string) => void
	updateNat: (nat: string) => void
	users: User[]
	loadingUsers: boolean
	selectUser: (user: User) => void
	selectAllUsers: () => void
	selectedUserIDs: string[]
	removeUsers: () => void
	updateUsersTableMode: (mode: TableMode) => void
	usersTableMode: TableMode
	handleUserInputsChange: (user: User, key: string, value: string) => void
}
