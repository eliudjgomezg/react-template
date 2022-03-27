import { useState } from 'react'

import { Pagination, PaginationItem } from '@mui/material'

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
