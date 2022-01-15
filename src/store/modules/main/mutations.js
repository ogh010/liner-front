export default{
    SET_BRANDS (state, brands) {
        state.brands = brands
    },
    SET_REQ_DATA (state, reqData) {
        state.reqData = reqData
    },
    SET_ORDER_CODE (state, orderCode) {
        state.orderCode = orderCode
    },
    SET_AMOUNT(state, amount) {
        state.reqData.order.amount = amount
    }
    
}