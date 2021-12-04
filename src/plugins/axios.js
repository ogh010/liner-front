import axios from 'axios'

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