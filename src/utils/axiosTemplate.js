import axios from '../plugins/axios'

export default async( url, cmd, reqData, option) => {
    
    let resData
    reqData = { ...reqData, cmd }
    console.log("[요청]============>")
    console.log(reqData)
    
    await axios.post(url, reqData, option)
    .then((res)=>{
        resData = res.data
    })

    console.log("[응답]============>")
    console.log(resData)
    console.log("[종료]============>")

    return resData
}



