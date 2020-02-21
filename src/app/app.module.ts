// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// app
import { AppComponent } from './app.component';
import { FrameModule } from './packages/frame.pck/frame.module';
import { APP_ROUTES } from './app-routing';
import { WidgetsModule } from './shared/widgets.mod/widgets.module';
import { HomeComponent } from './packages/modules.pck/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
	imports: [
		// angular
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(APP_ROUTES, {
			onSameUrlNavigation: 'reload'
		}),

		// shared
		SharedModule,

		// core
		FrameModule,
		WidgetsModule
	],
	declarations: [
		AppComponent,
		HomeComponent
	],
	providers: [ ],
	bootstrap: [AppComponent]
})

export class AppModule {
}
