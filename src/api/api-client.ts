import axios from "axios"

const baseURL = import.meta.env.VITE_BASE_URL

const api = axios.create({
  baseURL: baseURL,
  headers :{
    "Content-Type":"application/json",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  }
})

//Define common calls
const _get = (urlString : string) =>{
  return api.get(urlString)
}

const _post =(urlString: string, data : any) => {
  return api.post(urlString, data)
}

const _delete = (urlString:string) => {
  return api.get(urlString)
}

const _put = (urlString:string, data:any) => {
  return api.put(urlString, data)
}

export {_get, _post, _delete, _put}