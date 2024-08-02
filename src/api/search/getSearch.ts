import axios from 'axios'
import { constant } from '../../lib/constants'

type ResultList = {
  id: number
  url: string
  index: number
}

export async function getSearch(apiKey?: string, urls?: string[]) {
  let arrayResult: ResultList[] = []
  let objectRes = {}

  for (let i = 0; i <= (urls || [])?.length; i++) {
    try {
      const res = axios({
        method: 'post',
        url: constant.BASE_URL_API,
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          q: `site:${(urls || [])[i]}`,
        }),
      })
      const resOrganic = JSON.parse((await res).request.response).organic
      if (resOrganic.length >= constant.Indexed) {
        const a: ResultList = {
          id: i + 1,
          url: (urls || [])[i],
          index: constant.IsIndexed,
        }
        objectRes = { ...objectRes, ...a }
        arrayResult = [...arrayResult, objectRes]
      } else {
        console.log('chua duoc index')
      }
    } catch (error) {
      console.error(`API:getSearch:URL: ${(urls || [])[i]} :ERROR: ${error}`)
    }
  }
}
