import post from '../utils/axiosTemplate'

export default (reqData) => {
    return post('/be/v1/mb/apply/line/worker','line.be.v1.mb.apply.line.worker.req.json',reqData)
}