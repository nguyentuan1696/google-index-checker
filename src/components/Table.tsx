import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { Label } from '../ui/label'
import { CircleCheck } from 'lucide-react'
import { CircleAlert } from 'lucide-react'
import { constant } from '../lib/constants'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
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
                {v.index === constant.IsIndexed ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <CircleCheck />
                      </TooltipTrigger>
                      <TooltipContent className='mx-1'>
                        <p>Trang đã được index</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <CircleAlert />
                      </TooltipTrigger>
                      <TooltipContent className='mx-1'>
                        <p>Trang chưa được index</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
