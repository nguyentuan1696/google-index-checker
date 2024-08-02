import axios from 'axios'
import { constant } from '../../lib/constants'

type ResultList = {
  id: number
  url: string
  index: number
}

export async function getSearch(apiKey?: string, urls?: string[]) {
  const arrayResult: ResultList[] = []

  for (let i = 0; i < (urls || [])?.length; i++) {
    const objectRes = {} as ResultList
    objectRes.id = i + 1
    objectRes.url = (urls || [])[i]
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

      if (resOrganic.length >= constant.IndexTotal) {
        objectRes.index = constant.IsIndexed
      } else {
        objectRes.index = constant.IsNotIndex
      }
      arrayResult.push(objectRes)
    } catch (error) {
      console.error(`API:getSearch:URL: ${(urls || [])[i]} :ERROR: ${error}`)
    }
  }

  return arrayResult
}
