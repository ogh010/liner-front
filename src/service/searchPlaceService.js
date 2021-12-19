import post from '../utils/axiosTemplate'

export default (reqData) => {
    return post('/be/v1/mb/search/place','line.be.v1.mb.searc.place.req.json',reqData)
}

