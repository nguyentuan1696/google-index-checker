import { image } from '../lib/constants'

export default function Tutorial() {
  return (
    <div className='mx-auto xl:w-[50%] w-full px-2 mt-8'>
      <h1 className='mt-2 scroll-m-20 text-2xl font-bold'>
        Công cụ kiểm tra Index
      </h1>
      <h2 className='mt-8 scroll-m-20 text-2xl font-semibold tracking-tight  border-b pb-2 first:mt-0'>
        Hướng dẫn lấy API Key
      </h2>
      <ol className='my-6 ml-6 list-decimal'>
        <li className='my-2'>
          Đăng kí tài khoản tại <a href='https://serper.dev/signup'>Serper</a>
          <img src={image.imageSignup} alt='sign up' />
        </li>
        <li className='my-2'>Copy key tại tab API Key</li>
        <img src={image.imageApikey} alt='api key' />
      </ol>

      <h2 className='mt-8 scroll-m-20 text-2xl font-semibold tracking-tight  border-b pb-2 first:mt-0'>
        Hướng dẫn sử dụng công cụ
      </h2>
      <ol className='my-6 ml-6 list-decimal'>
        <li className='mt-2'>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            Trường <code>API Key</code> điền thông tin key vừa tạo
          </p>
        </li>
        <li className='mt-2'>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            Trường <code>URLs</code> điền danh sách URL muốn kiểm tra index
          </p>
        </li>
      </ol>
      <img src={image.imageHomePage} alt='homepage' />
    </div>
  )
}
