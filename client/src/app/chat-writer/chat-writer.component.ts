import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { SetNameComponent } from '../set-name/set-name.component'

@Component({
  selector: 'app-chat-writer',
  templateUrl: './chat-writer.component.html',
  styleUrls: ['./chat-writer.component.css']
})
export class ChatWriterComponent implements OnInit {
  private messageToSend: string
  private name: string = "No name"

  constructor( private messageService: MessageService) { }

  ngOnInit() { }

  sendMessage(): void {
    this.messageService.sendMessage(this.name, this.messageToSend);
    this.messageToSend = "";
  }

  setName(name: string): void {
    this.name = name;
  }
}
