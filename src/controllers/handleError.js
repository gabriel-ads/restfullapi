const handleError = (res, error) => {
    console.log(error.message)
    res.status(error.status || 500).json({...error, message: error.message})
}

module.exports = handleError