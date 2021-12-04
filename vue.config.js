module.exports = {
    devServer:{        
        proxy:{
            '/be':{
                //프록시요청을 보낼 주소.
                target: 'http://172.30.1.21:25123', //test 서버 
                changeOrigin: true,
                ws: false,
            },
        }
    },
}