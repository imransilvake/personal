// angular
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// app
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// environment
if (environment.production) {
	enableProdMode();
}

// bootstrap app
platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch(err => console.error(err));
