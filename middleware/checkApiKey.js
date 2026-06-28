const checkApiKey = (req,res,next) =>{
    const api_key = req.headers["key"]
    if (!api_key || api_key!= 123456){
        return res.status(401).json({error:"No permission"})
        next()
    }
}

module.exports = checkApiKey