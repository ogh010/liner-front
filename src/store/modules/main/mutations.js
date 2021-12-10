export default{
    // 장소&브랜드 조회하기
    SET_PLACES_NAME(state,name){
        state.resPlacename = name
    },
    SET_PLACES_BRANDS(state,brand){
        state.resPlaceBrand = brand
    },
    // 장소 브랜드 
    SET_BRANDS_NAME(state,brandName){
        state.brandName = brandName
    },
    SET_BRANS_PLACE(state,brandPlace){
        state.brandPlace = brandPlace
    },
    // 서비스 예약 확인하기
    SET_ORDER_CODE(state,orderCode){
        state.orderCode = orderCode
    },
    // 은행 정보 가져오기
    SET_BANK(state,banks){
        state.banks = banks
    },
    SET_AUTH_CODE(state,authCode){
        state.authCode = authCode
    },
    SET_BANK_NAME(state,bankName){
        state.bankName = bankName
    }
}