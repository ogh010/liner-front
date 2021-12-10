import post from '../utils/axiosTemplate'

class ApiService{
    line(reqData){
        return post('/be/v1/mb/apply/line/service','line.be.v1.mb.apply.line.service.req.json',reqData)
    }
}

export default new ApiService()