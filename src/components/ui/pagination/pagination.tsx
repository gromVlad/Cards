import { FC } from 'react'

import { Typography } from '..'

import s from './pagination.module.scss'

export type PaginationType = {
  page: number
  totalPages: number
  count?: number
  setPage: (page: number) => void
}

export const Pagination: FC<PaginationType> = ({ page, totalPages, count = 10, setPage }) => {
  const pageNumbers = []

  for (let index = 1; index < totalPages + 1; index++) {
    pageNumbers.push(index)
  }

  const prevPage = () => {
    page >= 1 && setPage(page - 1)
  }

  const nextPage = () => {
    page <= totalPages - 1 && setPage(page + 1)
  }

  const newPage = (el: number) => {
    setPage(el)
  }

  return (
    <div className={s.pagination}>
      <span onClick={prevPage} className={s.arrow}>
        {'< '}
      </span>
      {page > 4 && (
        <span className={s.element} onClick={() => newPage(1)}>
          {1} ...{' '}
        </span>
      )}
      {pageNumbers.slice(page - 4 <= 0 ? 0 : page - 2, page - 4 <= 0 ? 5 : page + 1).map(el => {
        return (
          <span key={el} onClick={() => newPage(el)} className={s.element}>
            <Typography variant="body1">{el}</Typography>
          </span>
        )
      })}
      {page < totalPages - 5 && (
        <span onClick={() => newPage(totalPages)} className={s.element}>
          {' '}
          ... {totalPages}
        </span>
      )}
      <span onClick={nextPage} className={s.arrow}>
        {' >'}
      </span>
    </div>
  )
}
