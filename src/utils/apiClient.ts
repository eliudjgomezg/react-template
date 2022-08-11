import autoBind from 'auto-bind'

import { IFetchParams, IPost, IPut, IRequestParams } from 'models/IRequest'

const defaultHeader = () => {
  const token = window.localStorage.getItem('user_token') ?? '""'
  return { 'Content-Type': 'application/json', Authorization: `Bearer ${JSON.parse(token)}` }
}

class APIClient {
  server: string

  constructor(SERVER: string) {
    this.server = SERVER
    autoBind(this)
  }

  async fetch<T, K>(params: IFetchParams<K>): Promise<T> {
    const { endpoint, method = 'GET', customHeader = undefined } = params
    let { body = undefined } = params
    const headers = customHeader ? { ...defaultHeader(), ...customHeader } : defaultHeader()
    body = JSON.stringify(body)

    const request = await fetch(`${this.server}${endpoint}`, { method, body, headers })
    if (request.ok) return request.json()
    throw { name: 'Fetch error', response: request, json: await this.tryJson(request) }
  }

  async tryJson(res: Response) {
    try {
      return await res.json()
    } catch (e) {
      return null
    }
  }

  //CRUD request methods
  GET<P>({ endpoint, customHeader }: IRequestParams): Promise<P> {
    return this.fetch<P, null>({ endpoint, customHeader: customHeader ?? undefined })
  }
  POST<P, B>({ endpoint, body, customHeader }: IPost<B> & IRequestParams): Promise<P> {
    return this.fetch<P, B>({ endpoint, method: 'POST', body, customHeader })
  }
  PUT<P, B>({ endpoint, body, customHeader }: Omit<IPut<B>, 'id'> & IRequestParams): Promise<P> {
    return this.fetch<P, B>({ endpoint, method: 'PUT', body, customHeader })
  }
  DELETE<P>({ endpoint, customHeader }: IRequestParams): Promise<P> {
    return this.fetch<P, null>({ endpoint, method: 'DELETE', customHeader })
  }
}

export const apiClient = new APIClient(process.env.NEXT_PUBLIC_BACKEND_SERVER_URL ?? '')
