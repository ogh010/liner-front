import post from '../utils/axiosTemplate'

class ApiService{
    searchPlace(reqData){
        return post('/be/v1/mb/search/place','line.be.v1.mb.searc.place.req.json',reqData)
    }
}

export default new ApiService()

