import post from '../utils/axiosTemplate'

class ApiService{
    bank(reqData){
        return post('/be/v1/mb/search/bank','line.be.v1.mb.search.bank.req.json',reqData)
    }
}

export default new ApiService()