const express=require('express')
const  responseTime = require('response-time')
const morgan=require('morgan')
const requestIp = require('request-ip');
const app=express();

// const ipMiddleware = function(req, res, next) {
//     const clientIp = requestIp.getClientIp(req); 
//     console.log(clientIp);
//     next();
// };
const logger=(req,res,next)=>{
    console.log("Name:Ajay")
    console.log("http method=",req.method)
    console.log("ip =",req.socket.localAddress)
    console.log("URL=",req.url)
    console.log("timestamp",new Date())
    // console.log(req.socket.remoteAddress);
    // console.log(req.ip);
    // console.log("headers",req.headers)
    next()
}

// app.use(morgan(logger))
app.use(responseTime())
app.use(morgan('dev'))
app.use(logger)
// app.use(ipMiddleware)
app.get('/',(req,res)=>{
    res.json({message:"welcome to day 6 assignment"})
})
app.listen(4528,()=>console.log("server is running at port 4528"))