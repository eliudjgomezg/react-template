import useLoader from 'hooks/useLoader'
import { IExample } from 'models/IExample'
import { TParams } from 'models/IRequest'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { apiClient, setEndpoint } from 'utils/apiClient'

//Request para traer listados => response: []
export const useExampleQueries = (queryParam?: string) => {
  const endpoint = setEndpoint('examples', queryParam)
  const list = useQuery([endpoint, queryParam], () => apiClient.getAll<IExample>(endpoint), { select: (data) => data.response })
  useLoader(list) //Si no necesitas que el Loader se renderice, borra esta linea

  return list
}

//Request para traer un item => response: {}
export const useExampleQuery = (id: string, queryParam?: string) => {
  const endpoint = setEndpoint('examples', id, queryParam)
  const item = useQuery([endpoint, id], () => apiClient.getOne<IExample>(endpoint), { select: (data) => data.response })
  useLoader(item) //Si no necesitas que el Loader se renderice, borra esta linea

  return item
}

//Request para hacer fetch a demanda => response: []
export const useStrategicCardsPondertionFecth = () => {
  const query = useQueryClient()
  const loader = useLoader()

  //Usa query.fetchQuery para traer 1 item o queries.fetchQuery para traer 1 item
  const example = async (id?: string) => {
    const endpoint = setEndpoint('examples', id)
    loader.setIsOpen(true) //Si no necesitas que el Loader se renderice, borra esta linea
    const response = await query.fetchQuery(endpoint, () => apiClient.getOne<IExample>(endpoint))
    loader.setIsOpen(false) //Si no necesitas que el Loader se renderice, borra esta linea
    return response
  }

  return example
}

export const useExampleMutation = () => {
  return useMutation((params: TParams<IExample>) =>
    apiClient.mutation<IExample, IExample>(setEndpoint('examples', params.id), params.method, params.body)
  )
}
