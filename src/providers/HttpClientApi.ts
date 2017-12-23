/**
 * FIDE HTTP API
 */
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import qs from 'qs';

@Injectable()
export class HttpClientApi {
    constructor(public http: HttpClient) {

    }
    //post请求
    post(data) {
        return new Promise((resolve, reject)=> {
            this.http.post('http://app.yuanpinren.cn/index/index/index', {}, {headers:{'Content-Type': 'application/x-www-form-urlencoded'}}).subscribe(response => {
                resolve(response);
                console.log('data   '+JSON.stringify(response));
            },error =>{
                reject(error);
            })
        })

    }
}


