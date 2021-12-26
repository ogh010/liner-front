module.exports = {
    // publicPath: '/line',
    devServer:{        
        proxy:{
            '/be':{
                //프록시요청을 보낼 주소.
                target: 'http://3.34.129.142:25123/', //test 서버 
                changeOrigin: true,
                ws: false,
            },
        }
    },
}