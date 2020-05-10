// angular
import { NgModule } from '@angular/core';

// app
import { WidgetsModule } from '../utilities.pck/widgets.mod/widgets.module';
import { SharedModule } from '../../shared.module';
import { E404Component } from './components/e404/e404.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageSwitchComponent } from './components/header/language-switch/language-switch.component';
import { ThemeSwitchComponent } from './components/header/theme-switch/theme-switch.component';
import { FontSwitchComponent } from './components/header/font-switch/font-switch.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
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
		LanguageSwitchComponent,
		ThemeSwitchComponent,
		FontSwitchComponent,
		ScrollTopComponent,
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
