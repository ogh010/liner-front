import post from '../utils/axiosTemplate'

export default (reqData) => {
    return post('/be/v1/mb/apply/line/service','line.be.v1.mb.apply.line.service.req.json',reqData)
}