// angular
import { NgModule } from '@angular/core';

// app
import { WidgetsModule } from '../utilities.pck/widgets.mod/widgets.module';
import { SharedModule } from '../../shared.module';
import { E404Component } from './components/e404/e404.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { LanguageSwitchComponent } from './components/language-switch/language-switch.component';
import { PushNotificationComponent } from './components/push-notification/push-notification.component';

@NgModule({
	imports: [
		SharedModule,
		WidgetsModule
	],
	declarations: [
		E404Component,
		HeaderComponent,
		FooterComponent,
		ScrollTopComponent,
		LanguageSwitchComponent,
		PushNotificationComponent
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		ScrollTopComponent,
		PushNotificationComponent
	]
})

export class FrameModule {
}
