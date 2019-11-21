import { Component } from '@angular/core';
import { NavController, PopoverController, AlertController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverController: PopoverController,
    public alertCtrl: AlertController) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverController.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });
  }

  // ionViewWillEnter(){
  //   this.p2 = false;
  //   this.p3 = false;
  //   this.p4 = false;
  //   this.p5 = false;
  //   this.p6 = false;
  //   this.p7 = false;
  //   this.p8 = false;
  //   this.p9 = false;
  //   this.p10 = false;
  //   this.p12 = false;
  //   this.p14 = false;
  //   this.p15 = false;
  //   this.p16 = false;
  //   this.p17 = false;
  //   this.p18 = false;
  //   this.p19 = false;
  // }

  reset() {
    this.p2 = false;
    // this.p3 = false;
    this.p4 = false;
    this.p5 = false;
    this.p6 = false;
    this.p7 = false;
    this.p8 = false;
    this.p9 = false;
    this.p10 = false;
    this.p12 = false;
    this.p14 = false;
    this.p15 = false;
    this.p16 = false;
    this.p17 = false;
    this.p18 = false;
    this.p19 = false;
    this.hasil2 = 0;
    // this.hasil3 = 0;
    this.hasil4 = 0;
    this.hasil5 = 0;
    this.hasil6 = 0;
    this.hasil7 = 0;
    this.hasil8 = 0;
    this.hasil9 = 0;
    this.hasil10 = 0;
    this.hasil12 = 0;
    this.hasil14 = 0;
    this.hasil15 = 0;
    this.hasil16 = 0;
    this.hasil17 = 0;
    this.hasil18 = 0;
    this.hasil19 = 0;
  }

  openModal(text1: string) {
    // const myData = {
    //   peringatan: text1
    // }
    // const myModal = this.modal.create('ModalPage', { data: myData });
    // myModal.present();

    this.navCtrl.push(ModalPage, {
      data: text1
    });

    this.reset();
  }

  p1; p2; p3; p4; p5; p6; p7; p8; p9; p10; p11; p12; p13; p14; p15; p16; p17; p18; p19;
  peringatan: number = 0;
  peringatanB: number = 0;
  hasil1: number = 2;
  hasil2: number = 0;
  // hasil3: number = 0;
  hasil4: number = 0;
  hasil5: number = 0;
  hasil6: number = 0;
  hasil7: number = 0;
  hasil8: number = 0;
  hasil9: number = 0;
  hasil10: number = 0;
  // hasil11: number = 0;
  hasil12: number = 0;
  // hasil13: number = 0;
  hasil14: number = 0;
  hasil15: number = 0;
  hasil16: number = 0;
  hasil17: number = 0;
  hasil18: number = 0;
  hasil19: number = 0;
  hasilAkhir: number = 0;
  buttonColor1 = "white";
  buttonColor2 = "#F598A2";
  buttonColor3 = "#F598A2";
  trimester: boolean = false;
  // openPopUp() {

  // }

  klik1() {
    this.buttonColor1 = "white";
    this.buttonColor2 = "#F598A2";
    this.buttonColor3 = "#F598A2";
    this.trimester = false;
    this.hasil15 = 0;
    this.hasil16 = 0;
    this.hasil17 = 0;
    this.reset();
  }

  klik2() {
    this.buttonColor1 = "#F598A2";
    this.buttonColor2 = "white";
    this.buttonColor3 = "#F598A2";
    this.trimester = false;
    this.hasil15 = 0;
    this.hasil16 = 0;
    this.hasil17 = 0;
    this.reset();
  }

  klik3() {
    this.buttonColor1 = "#F598A2";
    this.buttonColor2 = "#F598A2";
    this.buttonColor3 = "white";
    this.trimester = true;
    this.reset();
  }

  hitung() {
    this.hasilAkhir = 0;
    this.peringatan = 0;
    this.peringatanB = 0;
    //perhitungan pertanyaan 1
    // if (this.p1 == "a" || this.p1 == "b" || this.p1 == "c") {
    //   this.hasil1 = 2;
    // }

    //perhitungan pertanyaan 2
    if (this.p2 == "a") {
      this.hasil2 = 4;
    } else if (this.p2 == "b") {
      this.hasil2 = 0;
    } else if (this.p2 == "c") {
      this.hasil2 = 8;
    } else {
      this.peringatan = 1;
    }

    //perhitungan pertanyaan 3
    // if (this.p3 == "a") {
    //   this.hasil3 = 0;
    // } else if (this.p3 == "b") {
    //   this.hasil3 = 4;
    // }

    //perhitungan pertanyaan 4
    if (this.p4 == "a" || this.p4 == "c") {
      this.hasil4 = 4;
    } else if (this.p4 == "b" || this.p4 == "d") {
      this.hasil4 = 0;
    } else {
      this.peringatan = 1;
    }

    //perhitungan pertanyaan 5
    if (this.p5 == "a") {
      this.hasil5 = 0;
    } else if (this.p5 == "b") {
      this.hasil5 = 4;
    } else {
      this.peringatan = 1;
    }

    //perhitungan pertanyaan 6
    if (this.p6 == "a") {
      this.hasil6 = 4;
    } else if (this.p6 == "b") {
      this.hasil6 = 0;
    } else {
      this.peringatan = 1;
    }

    //perhitungan pertanyaan 7
    if (this.p7 == "a") {
      this.hasil7 = 4;
    } else if (this.p7 == "b") {
      this.hasil7 = 0;
    } else {
      this.peringatan = 1;
    }

    //perhitungan pertanyaan 8
    if (this.p8 == "a") {
      this.hasil8 = 4;
    } else if (this.p8 == "b") {
      this.hasil8 = 0;
    } else {
      this.peringatan = 1;
    }



    //perhitungan pertanyaan 9
    if (this.p9 == "a") {
      this.hasil9 = 8;
    } else if (this.p9 == "b") {
      this.hasil9 = 0;
    } else {
      this.peringatan = 1;
    }

    //perhitungan pertanyaan 10
    if (this.p10 == "a") {
      this.hasil10 = 4;
    } else if (this.p10 == "b") {
      this.hasil10 = 8;
    } else if (this.p10 == "c") {
      this.hasil10 = 12;
    } else if (this.p10 == "d") {
      this.hasil10 = 0;
    } else {
      this.peringatan = 1;
    }
    // else if (this.p10 == "e") {
    //   this.hasil10 = 0;
    // }

    //perhitungan pertanyaan 11
    // if (this.p11 == "a") {
    //   this.hasil11 = 4;
    // } else if (this.p11 == "b") {
    //   this.hasil11 = 0;
    // }

    //perhitungan pertanyaan 12
    if (this.p12 == "a") {
      this.hasil12 = 4;
    } else if (this.p12 == "b") {
      this.hasil12 = 0;
    } else {
      this.peringatan = 1;
    }

    //perhitungan pertanyaan 13
    // if (this.p13 == "a") {
    //   this.hasil13 = 4;
    // } else if (this.p13 == "b") {
    //   this.hasil13 = 0;
    // }

    //perhitungan pertanyaan 14
    if (this.p14 == "a") {
      this.hasil14 = 4;
    } else if (this.p14 == "b") {
      this.hasil14 = 0;
    } else {
      this.peringatan = 1;
    }

    //perhitungan pertanyaan 15
    if (this.p15 == "a") {
      this.hasil15 = 4;
    } else if (this.p15 == "b") {
      this.hasil15 = 0;
    } else {
      this.peringatanB = 1;
    }

    //perhitungan pertanyaan 16
    if (this.p16 == "a") {
      this.hasil16 = 4;
    } else if (this.p16 == "b") {
      this.hasil16 = 0;
    } else {
      this.peringatanB = 1;
    }

    //perhitungan pertanyaan 17
    if (this.p17 == "a") {
      this.hasil17 = 4;
    } else if (this.p17 == "b") {
      this.hasil17 = 0;
    } else {
      this.peringatanB = 1;
    }

    //perhitungan pertanyaan 18
    if (this.p18 == "a") {
      this.hasil18 = 8;
    } else if (this.p18 == "b") {
      this.hasil18 = 0;
    } else {
      this.peringatan = 1;
    }

    //perhitungan pertanyaan 19
    if (this.p19 == "a") {
      this.hasil19 = 8;
    } else if (this.p19 == "b") {
      this.hasil19 = 0;
    } else {
      this.peringatan = 1;
    }

    if (this.trimester == false && this.peringatanB == 1 && this.peringatan == 1) {
      let alert = this.alertCtrl.create({
        title: 'Kesalahan',
        subTitle: 'Silahkan Isi Seluruh Field',
        buttons: ['Ok']
      });
      alert.present();
    } else if (this.trimester == true && this.peringatanB == 1 && this.peringatan == 1) {
      let alert = this.alertCtrl.create({
        title: 'Kesalahan',
        subTitle: 'Silahkan Isi Seluruh Field',
        buttons: ['Ok']
      });
      alert.present();
    } else {
      this.hasilAkhir = (this.hasil1 + this.hasil2 + this.hasil4 + this.hasil5 + this.hasil6 +
        this.hasil7 + this.hasil8 + this.hasil9 + this.hasil10 + this.hasil12 + this.hasil14 + this.hasil15 +
        this.hasil16 + this.hasil17 + this.hasil18 + this.hasil19);

      console.log(this.hasil1);
      console.log(this.hasil2);
      // console.log(this.hasil3);
      console.log(this.hasil4);
      console.log(this.hasil5);
      console.log(this.hasil6);
      console.log(this.hasil7);
      console.log(this.hasil8);
      console.log(this.hasil9);
      console.log(this.hasil10);
      // console.log(this.hasil11);
      console.log(this.hasil12);
      // console.log(this.hasil13);
      console.log(this.hasil14);
      console.log(this.hasil15);
      console.log(this.hasil16);
      console.log(this.hasil17);
      console.log(this.hasil18);
      console.log(this.hasil19);
      console.log(this.hasilAkhir);

      if (this.hasilAkhir <= 2) {
        this.openModal("rendah");
      } else if (this.hasilAkhir > 2 && this.hasilAkhir <= 11) {
        this.openModal("tinggi");
      } else if (this.hasilAkhir > 11) {
        this.openModal("sangat");
      }
    }

  }
}
