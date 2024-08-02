import FormReport from '../components/Form'
import TableReport from '../components/Table'
import { Toaster } from '../ui/toaster'
import { useState } from 'react'
export default function Root() {
  const [data, setData] = useState([])
  return (
    <div className='flex-1'>
      <div className='grid grid-cols-1 xl:grid-cols-2'>
        <div className='p-4'>
          <FormReport setData={setData} />
        </div>
        <div className='p-4'>
          <TableReport data={data} />
        </div>
      </div>
      <Toaster />
    </div>
  )
}
