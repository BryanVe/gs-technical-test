type TGetUsersContext = Required<GetUsersParams> & {
	updatePage: (page: string) => void
	updateResults: (results: string) => void
	updateGender: (gender: string) => void
	updateNat: (nat: string) => void
	users: User[] | undefined
	loadingUsers: boolean
}
