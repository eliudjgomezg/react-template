import { useContext, useEffect } from 'react'

import { LoaderContext } from 'context/LoaderContext'
import { UseMutationResult, UseQueryResult } from 'react-query'

const useLoader = <T>(
  request?:
    | UseMutationResult<T, unknown, { body?: T; id?: string; method: 'POST' | 'PUT' | 'PATCH' | 'DELETE' }, unknown>
    | UseQueryResult<T, unknown>
) => {
  const loader = useContext(LoaderContext)

  useEffect(() => {
    request && loader.setIsOpen(request.isLoading)
  }, [request?.isLoading])

  return loader
}

export default useLoader
