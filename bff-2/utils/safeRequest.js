import axios from 'axios';
class SafeRequest {
    static fetch(url) {
        let result = {
            code: 0,
            message: '', // 一般会放一些错误信息
            data: null
        };
        return new Promise(resolve => {
            axios(url).then(res => {
                result.data = res.data;
                resolve(result)
            }).catch(e => {
                result.message = e.message;
                result.code = -1;
                resolve(result)
            })
        })
    }
}
export default SafeRequest;