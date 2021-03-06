import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MessageService } from './message.service'
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { ChatViewerComponent } from './chat-viewer/chat-viewer.component';
import { ChatWriterComponent } from './chat-writer/chat-writer.component';
import { SetNameComponent } from './set-name/set-name.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatViewerComponent,
    ChatWriterComponent,
    SetNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
