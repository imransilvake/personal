// angular
import { LOCALE_ID, NgModule, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { I18n } from '@ngx-translate/i18n-polyfill';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// app
import { AppComponent } from './app.component';
import { FrameModule } from './packages/frame.pck/frame.module';
import { APP_ROUTES } from './app-routing';
import { WidgetsModule } from './shared/widgets/widgets.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from "./packages/modules.pck/home.component";

// i18n using polyfills
// provided by webpack
declare const require;

@NgModule({
	imports: [
		// angular
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(APP_ROUTES, {
			onSameUrlNavigation: 'reload'
		}),

		// vendors
		FontAwesomeModule,

		// core
		FrameModule,
		WidgetsModule
	],
	declarations: [
		AppComponent,
		HomeComponent
	],
	providers: [
		I18n,
		{
			provide: TRANSLATIONS,
			useFactory: (locale) => {
				locale = locale || 'de';
				return require(`raw-loader!../locale/translation.${ locale }.xlf`);
			},
			deps: [LOCALE_ID]
		},
		{ provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
	],
	bootstrap: [AppComponent]
})

export class AppModule {
}
