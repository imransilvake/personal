// angular
import { NgModule } from '@angular/core';

// app
import { FirstKeyPipe } from './pipes/first-key.pipe';
import { LazyLoadImageDirective } from './directives/lazy-load-image.directive';

@NgModule({
	declarations: [FirstKeyPipe, LazyLoadImageDirective],
	exports: [FirstKeyPipe, LazyLoadImageDirective]
})
export class AccessoriesModule {}
