import { useState } from 'react'

import { useCopyToClipboard } from 'hooks/useCopyToClipboard'

import { Pagination, PaginationItem } from '@mui/material'

import UiButton from './UiButton'
import { ComponentWrapper } from './UiKitPage/UiPageLayout'

type TUiPagination = {
  count: number
  page: number
  className?: string
  onChange?: (event: React.ChangeEvent<unknown>, value: number) => void
}

export const useUiPagination = () => {
  const [page, setPage] = useState(1)

  const onChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return { page, onChange }
}

const UiPagination: React.FC<TUiPagination> = (props) => {
  return (
    <div className={`${props.className}`}>
      {props.count > 1 && (
        <Pagination
          count={props?.count}
          page={props?.page}
          shape='rounded'
          onChange={props?.onChange}
          renderItem={(item) => {
            const notSelectedStyle = ['previous', 'next', 'end-ellipsis'].includes(item.type) ? '' : 'hover:bg-gray-200'
            const selectedStyle = item.selected ? 'bg-black text-white hover:bg-black' : ''
            return (
              <PaginationItem className={`${notSelectedStyle} ${selectedStyle}`} sx={{ fontFamily: 'var(--primary-font)', fontSize: 14 }} {...item} />
            )
          }}
        />
      )}
    </div>
  )
}

export default UiPagination

export const UiPaginationView = () => {
  const { clipboard } = useCopyToClipboard()
  const pagination = useUiPagination()

  return (
    <ComponentWrapper title={'Paginación'}>
      <pre className='border p-4 whitespace-pre-wrap'>
        {`Propiedades del componente:

  type TUiPagination {
    count: number
    page: number
    className?: string
    onChange?: (event: React.ChangeEvent<unknown>, value: number) => void
  }

  NOTA: usar el custom hook useUiPagination para el manejo de las paginas.
`}
      </pre>
      <h2 className='text-black mt-4'>Paginación</h2>

      <UiPagination className='mt-4 flex justify-center' count={12} page={pagination.page} onChange={pagination.onChange} />

      <UiButton
        className='block ml-auto mt-4'
        onClick={() => clipboard(`<UiPagination className='mt-4 flex justify-center' count={5} page={3} onChange={(event, page) => page} />`)}
      >
        Copiar código
      </UiButton>
    </ComponentWrapper>
  )
}
