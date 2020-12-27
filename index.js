const axios = require('axios')
exports.handler = async function(event, context) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')

    return response.data
}
