import {Component, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpClientApi} from "../../providers/HttpClientApi";

import { Slides } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    data: any = {};
    slideList: any = [];
    @ViewChild(Slides) slides: Slides;

    constructor(public navCtrl: NavController,
                public http: HttpClientApi) {
    }

    ionViewDidEnter() {
        if(this.slideList.length >1){
            this.slides.autoplayDisableOnInteraction = false;
            this.slides.startAutoplay();
        }

    }

    async ionViewDidLoad() {

        let data = await this.http.post('').catch(err =>{
            console.log('error '+err);
        });
        this.data = data;
        this.slideList = this.data.data.slideList;
        console.log('this.data.data.slideList ' + JSON.stringify(this.data.data.slideList))
    }

}
