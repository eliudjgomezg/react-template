import autoBind from 'auto-bind'

import { TCustomHeader, TFetchParam, TMethod } from 'models/IRequest'

import endpoints from './endpoints'

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

  async fetch<T, K>(params: TFetchParam & { body?: Partial<K> | BodyInit }): Promise<T> {
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
  getAll<T>(endpoint: string, customHeader: Record<string, string> | undefined = undefined): Promise<{ response: T[] }> {
    return this.fetch({ endpoint, customHeader })
  }
  getOne<T>(endpoint: string, customHeader: Record<string, string> | undefined = undefined): Promise<{ response: T }> {
    return this.fetch({ endpoint, customHeader })
  }
  mutation<T, K>(endpoint: string, method: TMethod, body?: K, customHeader: TCustomHeader = undefined): Promise<T> {
    return this.fetch({ endpoint, method, body, customHeader })
  }
}

export const apiClient = new APIClient(process.env.NEXT_PUBLIC_BACKEND_SERVER_URL ?? '')

export const setEndpoint = (endpoint: keyof typeof endpoints, id?: string, queryParam?: string) => {
  return `${endpoints[endpoint](id ?? '')}${queryParam ?? ''}`
}
