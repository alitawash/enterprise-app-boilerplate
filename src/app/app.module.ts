import { CustomErrorHandler } from './com/funapps/utils/custom-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './com/funapps/components/shared/header/header.component';
import { FooterComponent } from './com/funapps/components/shared/footer/footer.component';
import { LandingComponent } from './com/funapps/components/shared/layouts/landing/landing.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './com/funapps/services/custom-http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptor,
    multi: true
  },
  {
    provide: ErrorHandler,
    useClass: CustomErrorHandler
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
