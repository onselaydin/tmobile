import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.mesaj="1 ile 10 arasında bir sayı tahmin edin"
  }
  randomSayi=Math.floor((Math.random() * 10) + 1)
  mesaj="";
  kontrolEt(sayi){ 
      if(this.randomSayi==sayi){
      this.mesaj="Tebrikler doğru bildiniz";
      return;
      }
      this.mesaj="Yanlış tahmin! tekrar deneyin";
  }
}
