export default{
    getBrands (state) {
        return state.brands;
    },
    getReqData (state) {
        return state.reqData;
    },
    getOrder (state) {
        return state.reqData.order;
    },
    getOrderCode (state) {
        return state.orderCode
    }
}