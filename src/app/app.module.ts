import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertComponent } from './insert/insert.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './update/update.component'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    ViewComponent,
    ListComponent,
    UpdateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage:"en",
      loader:{
        provide:TranslateLoader,
        useFactory:HttpFactoryMethod,
        deps:[HttpClient]
      }
    })

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

  export function HttpFactoryMethod(http:HttpClient) {
    return new TranslateHttpLoader(http);
  }

