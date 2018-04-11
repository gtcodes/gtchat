import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-chat-writer',
  templateUrl: './chat-writer.component.html',
  styleUrls: ['./chat-writer.component.css']
})
export class ChatWriterComponent implements OnInit {
  private messageToSend: string

  constructor( private messageService: MessageService ) { }

  ngOnInit() {
  }

  sendMessage(): void {
    this.messageService.sendMessage("Kevin", this.messageToSend);
    this.messageToSend = "";
  }

}
