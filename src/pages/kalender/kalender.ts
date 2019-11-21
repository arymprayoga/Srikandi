import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the KalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kalender',
  templateUrl: 'kalender.html',
})
export class KalenderPage {

  myDate = "";
  hasilnya;
  splitted;
  tahun; bulan; tanggal;
  prediksi: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KalenderPage');
  }

  ionViewWillEnter(){
    this.myDate = "";
    this.prediksi = false;
  }

  hitung() {
    if (this.myDate == "") {
      console.log("Isi Tanggalnya");
    } else if(this.myDate != "") {
      this.splitted = this.myDate.split("-", 3);
      this.tahun = parseInt(this.splitted[0]);
      this.bulan = parseInt(this.splitted[1]);
      this.bulan = (this.bulan - 1);
      this.tanggal = parseInt(this.splitted[2]);
      var t = moment().year(this.tahun).month(this.bulan).date(this.tanggal);
      if ((this.bulan) <= 3) {
        t.add(7, 'days').add(9, 'months');
      } else if (this.bulan > 3) {
        t.add(7, 'days').subtract(3, 'months').add(1, 'years');
      }
      this.hasilnya = t.format('D MMMM YYYY');
      this.prediksi = true;
    }
  }
}
