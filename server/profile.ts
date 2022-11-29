import {
  API_URL,
  GIT_HUB_TOKEN,
} from './../constant/index'
import {
  profileDetail
} from './../server/graphQL'
import {Profile} from '../model/profile'

export async function getProfile() : Promise<Profile>  {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${GIT_HUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: profileDetail(),
    }),
  })
  let resp = await response.json()
  return resp
}
