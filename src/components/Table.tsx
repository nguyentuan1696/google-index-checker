import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { Label } from '../ui/label'

export default function TableReport() {
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
          <TableRow>
            <TableCell className='font-medium'>1</TableCell>
            <TableCell className='line-clamp-1'>
              https://github.com/nguyentuan1696/google-index-checkervvvvhttps://github.com/nguyentuan1696/google-index-checker
            </TableCell>
            <TableCell className='text-right'>index</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
