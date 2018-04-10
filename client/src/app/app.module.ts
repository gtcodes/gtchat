import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MessageService } from './message.service'
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChatViewerComponent } from './chat-viewer/chat-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
