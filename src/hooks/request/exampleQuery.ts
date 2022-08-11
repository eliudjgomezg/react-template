import useLoader from 'hooks/useLoader'
import { IExample } from 'models/IExample'
import { IDelete, IPost, IPut, IRequestError } from 'models/IRequest'
import { useMutation, useQuery } from 'react-query'
import { apiClient } from 'utils/apiClient'

const endpoints = {
  examples: 'examples',
  exampleDetail: (id?: string) => `examples/${id ?? ''}`,
}

export const useExamplesQuery = (queryParam?: string) => {
  const endpoint = endpoints.examples
  const list = useQuery<IExample[], IRequestError>([endpoint, queryParam], () => apiClient.GET<IExample[]>({ endpoint }), { select: (data) => data })
  useLoader(list) //Si no necesitas que el Loader se renderice, borra esta linea

  return list
}

export const useExampleQuery = (id: string) => {
  const endpoint = endpoints.exampleDetail(id)
  const item = useQuery<IExample, IRequestError>(endpoint, () => apiClient.GET<IExample>({ endpoint }), { select: (data) => data })
  useLoader(item) //Si no necesitas que el Loader se renderice, borra esta linea

  return item
}

export const usePostExampleMutation = () => {
  return useMutation(({ body }: IPost<IExample>) => apiClient.POST<IExample, IExample>({ endpoint: endpoints.examples, body }))
}
export const usePutExampleMutation = () => {
  return useMutation(({ body, id }: IPut<IExample>) => apiClient.PUT<IExample, IExample>({ endpoint: endpoints.exampleDetail(id), body }))
}
export const useDeleteExampleMutation = () => {
  return useMutation(({ id }: IDelete) => apiClient.DELETE<IExample>({ endpoint: endpoints.exampleDetail(id) }))
}
