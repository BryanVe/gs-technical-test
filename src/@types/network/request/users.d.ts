type GetUsersParams = PaginationParams &
	Partial<{
		nat: string
		gender: string
	}>
