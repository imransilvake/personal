// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// app
import { AccessoriesModule } from '../packages/utilities.pck/accessories.mod/accessories.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	exports: [
		CommonModule,
		RouterModule,
		AccessoriesModule,
		FontAwesomeModule
	]
})

export class SharedModule {
}
