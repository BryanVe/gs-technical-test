import { useState } from 'react'
import { Collapse, Container, Stack } from 'react-bootstrap'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { constants } from '~/config'
import { useDisclosure } from '~/hooks'
import { getUsers } from '~/network'
import { Table } from '~/components'
import { Filters, Header, Navbar } from './components'

const columns: TableColumns<User> = [
	{
		id: 'name',
		label: 'Nombre',
		tdStyle: {
			minWidth: 150
		}
	},
	{
		id: 'gender',
		label: 'Género',
		tdClassName: 'text-capitalize'
	},
	{
		id: 'email',
		label: 'Correo electrónico'
	},
	{
		id: 'cell',
		label: 'Celular',
		tdStyle: {
			minWidth: 150
		}
	},
	{
		id: 'nat',
		label: 'Nacionalidad'
	}
]

const Main = () => {
	const { open: expandedFilters, onToggle: toggleExpandedFilters } =
		useDisclosure()
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

	const updatePage = (page: string) => updateSearchParams('page', page)

	const updateResults = (results: string) =>
		updateSearchParams('results', results)

	const updateGender = (gender: string) => updateSearchParams('gender', gender)

	const updateNat = (nat: string) => updateSearchParams('nat', nat)

	return (
		<>
			<Navbar
				logoAlt={constants.BRAND_NAME}
				logoSrc={constants.BRAND_LOGO_SRC}
			/>
			<Container className='pt-5'>
				<Stack gap={4}>
					<Header toggleExpandedFilters={toggleExpandedFilters} />
					<Collapse in={expandedFilters}>
						{/*
							wrap Filters component in a div for smooth animation purposes
							Ref: https://react-bootstrap.netlify.app/docs/utilities/transitions#horizontal 
						*/}
						<div>
							<Filters
								gender={searchParams.gender}
								nat={searchParams.nat}
								updateGender={updateGender}
								updateNat={updateNat}
							/>
						</div>
					</Collapse>
					<Table<User>
						enablePagination
						loadingData={loadingUsers}
						data={users}
						columns={columns}
						page={searchParams.page}
						updatePage={updatePage}
						updateResults={updateResults}
					/>
				</Stack>
			</Container>
		</>
	)
}

export default Main
