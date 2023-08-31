import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { Pagination } from '.'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta

export const Default = () => <Pagination page={2} totalPages={10} setPage={() => {}} />

export function Primary() {
  let [pageNumber, setPageNumber] = useState(1)

  let total = 20

  return (
    <>
      <Pagination page={pageNumber} totalPages={total} setPage={setPageNumber} />
      <h1>{pageNumber}</h1>
    </>
  )
}
