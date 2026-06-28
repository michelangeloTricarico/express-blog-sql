const notFound = (req,res,next) =>{
    res.status(404).json({error:"NotFound"})
}

module.exports = notFound