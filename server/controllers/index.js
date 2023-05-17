exports.getIndex = async(req,res) => {
    req.status(200).json({
        message: 'Test API is working',
    })
}