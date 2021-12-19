import post from '../utils/axiosTemplate'

export default (reqData) => {
    return post('/be/v1/mb/search/bank', 'line.be.v1.mb.search.bank.req.json', reqData)
}