﻿import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-about',
    templateUrl: '../pages/about/about.html'
})
export class AboutViewModel {

    constructor(public navCtrl: NavController) {  }

}
