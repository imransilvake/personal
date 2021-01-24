// angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// app
import { HOME_ROUTE } from './home-routing';
import { SharedModule } from '../../shared.module';
import { HomeComponent } from './home.component';
import { WidgetsModule } from '../utilities.pck/widgets.mod/widgets.module';

@NgModule({
	imports: [RouterModule.forChild(HOME_ROUTE), SharedModule, WidgetsModule],
	declarations: [HomeComponent]
})
export class HomeModule {}
