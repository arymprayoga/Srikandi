import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { AboutPage } from '../../pages/about/about';

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  text: string;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    console.log('Hello PopoverComponent Component');
    this.text = 'Hello World';
  }

  about(){
    this.navCtrl.push(AboutPage);
    this.viewCtrl.dismiss();
  }

}
