import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { KalenderPage } from '../pages/kalender/kalender';
import { PengetahuanPage } from '../pages/pengetahuan/pengetahuan';
import { AboutPage } from '../pages/about/about';
import { ModalPage } from '../pages/modal/modal';

import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AccordionComponent } from '../components/accordion/accordion';
import { PopoverComponent } from '../components/popover/popover';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    KalenderPage,
    PengetahuanPage,
    AboutPage,
    ModalPage,
    AccordionComponent,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    KalenderPage,
    PengetahuanPage,
    AboutPage,
    ModalPage,
    AccordionComponent,
    PopoverComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
