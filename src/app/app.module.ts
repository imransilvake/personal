// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// app
import { APP_ROUTES } from './app-routing';
import { AppComponent } from './app.component';
import { FrameModule } from './packages/frame.pck/frame.module';
import { WidgetsModule } from './shared/widgets.mod/widgets.module';

@NgModule({
	imports: [
		// angular
		BrowserModule,
		RouterModule.forRoot(APP_ROUTES, { onSameUrlNavigation: 'reload' }),

		// app
		FrameModule,
		WidgetsModule
	],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})

export class AppModule {
}
