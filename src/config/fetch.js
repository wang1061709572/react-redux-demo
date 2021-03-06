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

export const fetchPost = (url, body, success, fail) => {

    fetch(config.url+url, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            //'content-type':'application/json;charset=UTF-8',
            'cache-control': 'no-cache',
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

export const fetchGet = (url, body, success, fail) => {
    
    let enhanceUrl = `${url}?${stringifyParams(body)}`;
    
    fetch(enhanceUrl, {
        
        method: 'get',
        headers: {
            'X-Requested-With':'XMLHttpRequest',
            'cache-control': 'no-cache',
            'Accept':'*/*',
        },
        credentials: 'include'
        
    })
        .then(response => response.json())
        .then((response) => {
            
            if (response.status === 0) {
                
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
