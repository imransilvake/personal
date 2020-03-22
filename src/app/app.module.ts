// angular
import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// app
import { APP_ROUTES } from './app-routing';
import { AppComponent } from './app.component';
import { FrameModule } from './packages/frame.pck/frame.module';
import { WidgetsModule } from './shared/widgets.mod/widgets.module';

@NgModule({
	imports: [
		// angular
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(APP_ROUTES, { onSameUrlNavigation: 'reload' }),

		// libraries
		HammerModule,

		// app
		FrameModule,
		WidgetsModule
	],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})

export class AppModule {
}
