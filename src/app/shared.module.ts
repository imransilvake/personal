// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// app
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { AccessoriesModule } from './packages/utilities.pck/accessories.mod/accessories.module';

@NgModule({
	exports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		AccessoriesModule,
		FontAwesomeModule,
		TranslateModule
	]
})

export class SharedModule {
}
