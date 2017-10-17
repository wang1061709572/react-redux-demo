/**
 * Created by Administrator on 2017/8/4.
 */
/**
 * Created by Administrator on 2017/8/3.
 */
import config from './config.js'
const stringifyParams = (params) => (

    Object.keys(params).map((key) => (key + '=' + encodeURIComponent(params[key]))).join('&')

);

let defaultFailFun = (data) => {

    data && data.msg && alert(data.msg)

};

const fetchPost = (url, body, success, fail) => {

    fetch(config.url+url, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            //'content-type':'application/json;charset=UTF-8',
            'cache-control': 'no-cache',
            ClientType: "Driver",
            Equipment: config.Equipment,
            baseuserid:localStorage.getItem('personId'),
            ClientSystem:"IOS"
        },
        redirect: 'follow',
        credentials: 'include',
        body: stringifyParams(body)

    })
        .then(response => response.json())
        .then((response) => {

            if (response.suc) {

                success(response.data)

            } else {

                if (!fail) { fail = defaultFailFun };

                fail(response)

            }

        })
        .catch((err) => {

            if (!fail) { fail = defaultFailFun };

            fail(err)

        })

}
export default fetchPost
