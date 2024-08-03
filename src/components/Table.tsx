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
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { exportToExcel } from 'react-json-to-excel'
import { genDate } from '../lib/utils'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import { Button } from '../ui/button'
type ResultList = {
  id: number
  url: string
  index: string
}

function handleReport(data: ResultList[]) {
  if (data === null || data.length === 0) {
    return
  }

  return exportToExcel(data, `report_${genDate()}`)
}

export default function TableReport({ data }: { data: ResultList[] }) {
  return (
    <div className=''>
      <div className='flex justify-between items-center'>
        <Label htmlFor='text'>Bảng kết quả</Label>
        <Button onClick={() => handleReport(data)}>Tải về báo cáo</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className=''>STT</TableHead>
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
