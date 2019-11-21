import { Component } from '@angular/core';

import { KalenderPage } from '../kalender/kalender';
import { PengetahuanPage } from '../pengetahuan/pengetahuan';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PengetahuanPage;
  tab3Root = KalenderPage;

  constructor() {

  }
}
