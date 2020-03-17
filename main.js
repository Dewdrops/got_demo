const https = require('https')

const got = require('got')


https
    .get('https://www.baidu.com', (resp) => {
        let data = '';
        resp.on('data', (chunk) => data += chunk )
        resp.on('end', () => console.log(`Node https resp received`) )
    })
    .on("error", (err) => console.error("Error in node https: " + err.message))

got('https://www.baidu.com')
    .then(resp => console.log(`Got resp resp received`))
    .catch(err => console.error('Error in got: ' + err.message))

setTimeout(() => console.log(`10s elapsed`), 10000)
