const serverError = (req,res,next) =>{
    res.status(500).json({error:"Something went wrong"})
}

module.exports = serverError