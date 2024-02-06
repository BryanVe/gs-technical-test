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
	const { data: users, isLoading: loadingUsers } = useQuery({
		queryKey: [
			'getUsers',
			searchParams.page,
			searchParams.results,
			searchParams.gender,
			searchParams.nat
		],
		queryFn: async ({ queryKey }) => {
			return await getUsers({
				page: queryKey[1],
				results: queryKey[2],
				gender: queryKey[3] !== 'all' ? queryKey[3] : undefined,
				nat: queryKey[4] !== 'all' ? queryKey[4] : undefined
			})
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

	return (
		<GetUsersContext.Provider
			value={{
				...searchParams,
				updatePage,
				updateResults,
				updateGender,
				updateNat,
				users,
				loadingUsers
			}}
		>
			{children}
		</GetUsersContext.Provider>
	)
}
