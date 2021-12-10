import post from '../utils/axiosTemplate'

class ApiService{
    worker(reqData){
        return post('/be/v1/mb/apply/line/worker','line.be.v1.mb.apply.line.worker.req.json',reqData)
    }
}

export default new ApiService()