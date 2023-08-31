import { FC, useState } from 'react'

import { Typography } from '..'
import { SelectComponent } from '../select'

import s from './pagination.module.scss'

export type PaginationType = {
  page: number
  total: number
  setPage: (page: number) => void
}

export const Pagination: FC<PaginationType> = ({ page, total, setPage }) => {
  let [totalSeparated, setSeparated] = useState('10')

  let totalPages = Math.ceil(total / +totalSeparated)
  const pageNumbers = []

  for (let index = 1; index < totalPages + 1; index++) {
    pageNumbers.push(index)
  }

  const prevPage = () => {
    page > 1 && setPage(page - 1)
  }

  const nextPage = () => {
    page <= totalPages - 1 && setPage(page + 1)
  }

  const newPage = (el: number) => {
    setPage(el)
  }

  const pageSlice =
    page < totalPages - 3
      ? pageNumbers.slice(page - 4 <= 0 ? 0 : page - 2, page - 4 <= 0 ? 5 : page + 1)
      : pageNumbers.slice(
          page >= totalPages - 5 ? totalPages - 5 : page - 2,
          page >= totalPages - 5 ? totalPages : page + 1
        )

  const pageSliceFinally = totalPages > 5 ? pageSlice : pageNumbers

  return (
    <div className={s.pagination}>
      <span onClick={prevPage} className={s.arrow}>
        {'<  '}
      </span>
      {page > 4 && pageNumbers.length > 5 && (
        <>
          <span className={s.element} onClick={() => newPage(1)}>
            {1}
          </span>
          {'...  '}
        </>
      )}
      {pageSliceFinally.map(el => {
        return (
          <span
            key={el}
            onClick={() => newPage(el)}
            className={`${s.element} ${page === el && s.elementActive}`}
          >
            <Typography variant="body1" className={s.text}>
              {el}
            </Typography>
          </span>
        )
      })}
      {page < totalPages - 3 && pageNumbers.length > 5 && (
        <>
          {' ...'}
          <span onClick={() => newPage(totalPages)} className={s.element}>
            {totalPages}
          </span>
        </>
      )}
      <span onClick={nextPage} className={s.arrow}>
        {'  >'}
      </span>

      <span className={s.textSelectShow}>Показать</span>
      <div className={s.select}>
        <SelectComponent
          value={totalSeparated}
          options={[
            { value: '10', label: '10' },
            { value: '20', label: '20' },
            { value: '30', label: '35' },
            { value: '50', label: '50' },
            { value: '100', label: '100' },
          ]}
          onChange={(e: any) => {
            setSeparated(e)
            newPage(1)
          }}
        />
      </div>
      <span className={s.textListSelect}>На странице</span>
    </div>
  )
}
