import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, NavController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(private view: ViewController, public navParams: NavParams, public navCtrl: NavController) {
  }

  peringatan;
  deskripsi;
  hasil1: boolean = false;
  hasil2: boolean = false;
  hasil3: boolean = false;
  ionViewWillLoad() {
    this.peringatan = this.navParams.get('data');
    if (this.peringatan == "rendah") {
      this.hasil1 = true;
      this.hasil2 = false;
      this.hasil3 = false;
    } else if (this.peringatan == "tinggi") {
      this.hasil1 = false;
      this.hasil2 = true;
      this.hasil3 = false;
    } else if (this.peringatan == "sangat") {
      this.hasil1 = false;
      this.hasil2 = false;
      this.hasil3 = true;
    }
  }

  closeModal() {
    this.view.dismiss();
  }

}
