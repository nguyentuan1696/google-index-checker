import axios from 'axios'
import { constant } from '../../lib/constants'


export async function getSearch({
  apiKey = '',
  urls = [],
}: {
  apiKey?: string
  urls?: string[]
}) {
  const config = {
    method: 'post',
    url: constant.BASE_URL_API,
    headers: {
      'X-API-KEY': apiKey,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      q: 'site:https://thichtienganh.com/meo-con-lon-ton',
    }),
  }

  try {
    const res =  axios(config)
    const resOrganic = JSON.parse((await res).request.response).organic
    if (resOrganic.length >= constant.IsIndexed) {
      console.log('da duoc index', urls)
    } else {
      console.log('chua duoc index')
    }
  } catch (error) {
    console.error(error)
  }
}
