export default (to,from,next) =>{
    if(to.path == ''){
        console.log('router navigater here');
    }
    else{
        console.log(to,from);
    }
    next()
}