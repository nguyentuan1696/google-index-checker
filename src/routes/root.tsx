import FormReport from '../components/Form'
import TableReport from '../components/Table'

export default function Root() {
  return (
    <div className=''>
      <div className='flex-1'>
        <div className='grid grid-cols-2'>
          <div className='p-4'>
            <FormReport />
          </div>
          <div className='p-4'>
            <TableReport />
          </div>
        </div>
      </div>
    </div>
  )
}
