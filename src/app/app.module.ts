// angular
import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// app
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { APP_ROUTES } from './app-routing';
import { AppComponent } from './app.component';
import { FrameModule } from './packages/frame.pck/frame.module';
import { WidgetsModule } from './shared/widgets.mod/widgets.module';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
	imports: [
		// angular
		BrowserModule,
		RouterModule.forRoot(APP_ROUTES),
		HttpClientModule,

		// libraries
		HammerModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [HttpClient]
			}
		}),

		// app
		FrameModule,
		WidgetsModule
	],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})

export class AppModule {
}
