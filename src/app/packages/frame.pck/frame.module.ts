// angular
import { NgModule } from '@angular/core';

// app
import { SharedModule } from '../../shared/shared.module';
import { E404Component } from './components/e404/e404.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { WidgetsModule } from '../../shared/widgets/widgets.module';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { NoticeBlockComponent } from './components/notice-block/notice-block.component';

@NgModule({
	imports: [
		SharedModule,
		WidgetsModule
	],
	declarations: [
		E404Component,
		HeaderComponent,
		FooterComponent,
		ScrollTopComponent,
		SocialLinksComponent,
		NoticeBlockComponent
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		ScrollTopComponent,
		SocialLinksComponent,
		NoticeBlockComponent
	]
})

export class FrameModule {
}
