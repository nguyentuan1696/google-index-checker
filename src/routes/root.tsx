import Form from '../components/Form'
import TableReport from '../components/Table'

export default function Root() {
  return (
    <div className='grid grid-cols-2'>
      <div className='p-4'>
        <Form />
      </div>
      <div className='p-4'>
        <TableReport />
      </div>
    </div>
  )
}
