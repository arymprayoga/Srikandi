import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PengetahuanPage } from './pengetahuan';
// import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PengetahuanPage,
  ],
  imports: [
    // ComponentsModule,
    IonicPageModule.forChild(PengetahuanPage)
  ],
})
export class PengetahuanPageModule {}
