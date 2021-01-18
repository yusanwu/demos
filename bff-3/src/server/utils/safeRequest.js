import axios from "axios";
class SafeRequest {
    static fetch(url){
        // 响应数据的模板
        let result = {
            code: 0,
            msg: '',
            data: null
        }
        return new Promise(resolve => {
            axios(url).then(res => {
                result.data = res.data;
                resolve(res);
            }).catch(e => {
                // 填充接口返回的错误信息，然后返回
                result.message = e.message;
                result.code = -1;
                resolve(result);
            })
        });
    }
}
export default SafeRequest;