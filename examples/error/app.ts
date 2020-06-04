import axios from '../../src/index'

axios({
    method: 'get',
    url: '/error/get'
}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})

// 404
axios({
    method: 'get',
    url: '/error/get1'
}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})

setTimeout(() => {
    axios({
        method: 'get',
        url: '/error/get'
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })
}, 5000)

axios({
    method: 'get',
    url: '/error/timeout'
}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err.message)
})