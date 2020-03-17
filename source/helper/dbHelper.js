//just to check if the data is array of object or not
//and do the format
const formatMongoData = (data) => {
    let newdata = []
    if (Array.isArray(data)) {
        for (const value of data) {
            newdata.push(value)
        }
        return newdata
    }
    return data
}

module.exports = { formatMongoData }