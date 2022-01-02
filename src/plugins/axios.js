import axios from 'axios'

axios.defaults.baseURL = "http://3.35.9.115:25123"

axios.interceptors.request.use(
    (reqData) =>{
        return reqData
    }
)
axios.interceptors.response.use(
    (resData) =>{
        return resData
    }
)

export default axios