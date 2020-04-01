import axios from '../../src/index'

// axios({
//     url: '/base/get',
//     params: {
//         a: 'foo'
//     }
// })

// axios({
//     url: '/base/get',
//     params: {
//         a: ['foo', 'bar']
//     }
// })

// axios({
//     url: '/base/get',
//     params: {
//         a: {
//             b: 'foo'
//         }
//     }
// })

// const date = new Date()

// axios({
//     url: '/base/get',
//     params: {
//         date
//     }
// })

// axios({
//     url: '/base/get',
//     params: {
//         foo: '@:$, '
//     }
// })

// axios({
//     url: '/base/get',
//     params: {
//         a: 'foo',
//         b: null
//     }
// })

// axios({
//     url: '/base/get#hash',
//     params: {
//         a: 'foohash'
//     }
// })

// axios({
//     url: '/base/get?foo=bar',
//     params: {
//         a: 'foo'
//     }
// })

axios({
    method: 'post',
    url: '/base/post',
    headers: {
        'content-type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
    },
    data: {
        a: 1, b: 2
    }
}).then(res => {
    console.log(res)
})

const paramsString = new URLSearchParams('q=URLUtils.searchParams&topic=api')

axios({
    method: 'post',
    url: '/base/post',
    data: paramsString
})