import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { FC, PropsWithChildren, createContext, useState } from 'react'
import { constants } from '~/config'
import { getUsers } from '~/network'

export const GetUsersContext = createContext<TGetUsersContext | null>(null)

type GetUsersProviderProps = PropsWithChildren

export const GetUsersProvider: FC<GetUsersProviderProps> = props => {
	const { children } = props
	const [searchParams, setSearchParams] = useState<Required<GetUsersParams>>({
		page: '1',
		results: constants.PAGE_SIZES[0],
		gender: constants.GENDERS[0],
		nat: constants.NATIONALITIES[0]
	})
	const [selectedUserIDs, setSelectedUserIDs] = useState<string[]>([])
	const [editableUsers, setEditableUsers] = useState<Record<string, User>>({})
	const editableUsersAsArray = Object.values(editableUsers)
	const { isLoading: loadingUsers } = useQuery({
		queryKey: [
			'getUsers',
			searchParams.page,
			searchParams.results,
			searchParams.gender,
			searchParams.nat
		],
		queryFn: async ({ queryKey }) => {
			const users = await getUsers({
				page: queryKey[1],
				results: queryKey[2],
				gender: queryKey[3] !== 'all' ? queryKey[3] : undefined,
				nat: queryKey[4] !== 'all' ? queryKey[4] : undefined
			})

			setEditableUsers(
				users.reduce<Record<string, User>>((result, user) => {
					result[user.id] = user
					return result
				}, {})
			)
			return users
		},
		refetchOnWindowFocus: false,
		placeholderData: keepPreviousData
	})

	const updateSearchParams = (key: keyof GetUsersParams, value: string) =>
		setSearchParams(previousSearchParams => ({
			...previousSearchParams,
			[key]: value
		}))

	const updatePage: TGetUsersContext['updatePage'] = page =>
		updateSearchParams('page', page)

	const updateResults: TGetUsersContext['updateResults'] = results =>
		updateSearchParams('results', results)

	const updateGender: TGetUsersContext['updateGender'] = gender =>
		updateSearchParams('gender', gender)

	const updateNat: TGetUsersContext['updateNat'] = nat =>
		updateSearchParams('nat', nat)

	const selectUser = (user: User) => {
		const isSelected = selectedUserIDs.includes(user.id)
		let newSelectedUserIDs: string[] = []

		if (isSelected)
			newSelectedUserIDs = selectedUserIDs.filter(id => id !== user.id)
		else newSelectedUserIDs = selectedUserIDs.concat(user.id)

		setSelectedUserIDs(newSelectedUserIDs)
	}

	const selectAllUsers = () => {
		let newSelectedUserIDs: string[] = []

		if (selectedUserIDs.length !== editableUsersAsArray.length)
			newSelectedUserIDs = editableUsersAsArray.map(user => user.id)

		setSelectedUserIDs(newSelectedUserIDs)
	}

	const removeUsers = () => {
		const newEditableUsers = { ...editableUsers }

		for (const userID of selectedUserIDs) {
			delete newEditableUsers[userID]
		}

		setEditableUsers(newEditableUsers)
	}

	return (
		<GetUsersContext.Provider
			value={{
				...searchParams,
				updatePage,
				updateResults,
				updateGender,
				updateNat,
				users: editableUsersAsArray,
				loadingUsers,
				selectUser,
				selectAllUsers,
				selectedUserIDs,
				removeUsers
			}}
		>
			{children}
		</GetUsersContext.Provider>
	)
}
