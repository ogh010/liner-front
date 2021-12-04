import axios from 'axios'

export default async( url, cmd, reqData, option) => {
    console.log(url,cmd,reqData);
    let response 
    await axios.post(url,{...reqData, cmd:cmd}, option)
    .then((res)=>{
        console.log(res.data);
        response = res.data
    })

    return response
}



