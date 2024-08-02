import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { Label } from '../ui/label'

type ResultList = {
  id: number
  url: string
  index: number
}

export default function TableReport({ data }: { data: ResultList[] }) {

  return (
    <div>
      <Label htmlFor='text'>Bảng kết quả</Label>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>STT</TableHead>
            <TableHead>URL</TableHead>
            <TableHead className='text-right'>Trạng thái</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from(data).map((v, i) => (
            <TableRow key={i}>
              <TableCell className='font-medium'>{v.id}</TableCell>
              <TableCell className=''>{v.url}</TableCell>
              <TableCell className='text-right'>
                {v.index === 1 ? 'ok' : ' ko ok'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
