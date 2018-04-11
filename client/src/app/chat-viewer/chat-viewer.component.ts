import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chat-viewer',
  templateUrl: './chat-viewer.component.html',
  styleUrls: ['./chat-viewer.component.css']
})
export class ChatViewerComponent implements OnInit {
  private messages: Message[];
  private connection;

  constructor( private messageService: MessageService ) {
    this.messages = [];
  }

  ngOnInit() {
    console.log('ChatViewer init')
    this.messageService.createObservable();
    this.connection = this.messageService.getMessageObservable().subscribe( (message: Message) => {
      this.messages.push(message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
