import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-chat-viewer',
  templateUrl: './chat-viewer.component.html',
  styleUrls: ['./chat-viewer.component.css']
})
export class ChatViewerComponent implements OnInit {
  messages: Message[];

  constructor( private messageService: MessageService ) { }

  ngOnInit() {
    console.log('ChatViewer init')
    console.log(this.messageService.getMessages())
    this.getMessages();
    console.log('Got messages from messageService')
  }

  getMessages(): void {
    this.messages = this.messageService.getMessages();
  }

}
