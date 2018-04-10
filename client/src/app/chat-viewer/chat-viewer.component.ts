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
  private messageToSend: string

  constructor( private messageService: MessageService ) {
    this.messages = [];
    this.messageToSend = "hello";
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

  sendMessage(): void {
    this.messageService.sendMessage("Kevin", this.messageToSend);
    this.messageToSend = "";
  }

}
