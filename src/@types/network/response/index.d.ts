type ApiSuccessResponse<T = string> = {
	results: T
}

type ApiErrorResponse = {
	error: string
}
