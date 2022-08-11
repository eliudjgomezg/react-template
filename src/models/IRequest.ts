type TMutationMethod = 'POST' | 'PUT' | 'PATCH' | 'DELETE'
export type TMethod = 'GET' | TMutationMethod
export type TCustomHeader = Record<string, string> | undefined

export interface IRequestParams {
  endpoint: string
  customHeader?: TCustomHeader
}

export interface IFetchParams<T> extends IRequestParams {
  method?: TMethod
  body?: Partial<T> | BodyInit
}

export interface IPost<T> {
  body: T
}

export interface IPut<T> {
  body?: T
  id: string
}

export interface IDelete {
  id: string
}

export interface IRequestError {
  name: string
  response: Response
  json: {
    message: string
    statusCode: number
  }
}
