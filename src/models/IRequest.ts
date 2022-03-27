type TMutationMethod = 'POST' | 'PUT' | 'PATCH' | 'DELETE'
export type TMethod = 'GET' | TMutationMethod
export type TCustomHeader = Record<string, string> | undefined

export type TFetchParam = {
  endpoint: string
  method?: TMethod
  customHeader?: TCustomHeader
}

export interface TParams<T> {
  body?: T
  id?: string
  method: TMutationMethod
}

export interface IRequestError {
  name: string
  response: Response
  json: {
    message: string
    statusCode: number
  }
}
