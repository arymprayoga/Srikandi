import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion';
import { PopoverComponent } from './popover/popover';
// import { IonicModule } from 'ionic-angular';
import { TestComponent } from './test/test';
@NgModule({
	declarations: [AccordionComponent,
    PopoverComponent,
    TestComponent],
	imports: [],
	exports: [AccordionComponent,
    PopoverComponent,
    TestComponent]
})
export class ComponentsModule {}
