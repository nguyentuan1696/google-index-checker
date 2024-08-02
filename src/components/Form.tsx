'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Textarea } from '../ui/textarea'
import { toast } from '../ui/use-toast'
import { getSearch } from '../api/search/getSearch'
import { convertArrayString } from '../lib/utils'

const FormSchema = z.object({
  urls: z.string(),
  apiKey: z.string().min(40, { message: 'Sai định dạng API Key' }),
})

export default function FormReport() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      urls: '',
      apiKey: '',
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'Relax... và chờ chút để hệ thống xử lí nhé 🥳',
    })

    const res = await getSearch(data.apiKey, convertArrayString(data.urls))
    console.log('res= ', res)

  
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-ful space-y-6'>
        <FormField
          control={form.control}
          name='apiKey'
          render={({ field }) => (
            <FormItem>
              <FormLabel>API Key</FormLabel>
              <FormControl>
                <Input type='text' placeholder='Điền API Key' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name='urls'
          render={({ field }) => (
            <FormItem>
              <FormLabel>URLs</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Điền danh sách URLs cần kiểm tra index'
                  {...field}
                />
              </FormControl>
              <FormDescription>Mỗi URL là một dòng</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full'>
          Submit
        </Button>
      </form>
    </Form>
  )
}
