import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

export default function Form() {
  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <Label htmlFor='text'>API Key</Label>
        <Input />
      </div>
      <div className='space-y-2'>
        <Label htmlFor='text'>Danh sách URLs cần kiểm tra</Label>
        <Textarea />
      </div>
      <Button variant='outline' className='w-full'>
        Kiểm tra
      </Button>
    </div>
  )
}
