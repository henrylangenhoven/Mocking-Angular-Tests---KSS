import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ContentLeftComponent } from './content/content-left/content-left.component';
import { ContentRightComponent } from './content/content-right/content-right.component';
import { ContentTopComponent } from './content/content-top/content-top.component';
import { ContentBottomComponent } from './content/content-bottom/content-bottom.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ContentLeftComponent,
    ContentRightComponent,
    ContentTopComponent,
    ContentBottomComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
