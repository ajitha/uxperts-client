import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatItemComponent } from './chat-item/chat-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ExpertUserBadgeComponent } from './expert-user-badge/expert-user-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatItemComponent,
    ExpertUserBadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
