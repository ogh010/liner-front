module.exports = {
    publicPath: '/line/mb',
    devServer:{        
        proxy:{
            '/be':{
                //프록시요청을 보낼 주소.
                target: 'http://3.35.9.115:25123', //test 서버 
                changeOrigin: true,
                ws: false,
            },
        }
    },
}