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
  private currentUrl: string;
  private ip: string;
  
  private connection;
  private onPingSubscriber;

  constructor( private messageService: MessageService ) {
    this.messages = [];
  }
  
  setUrl(url: string): void {
    this.messageService.initSocket(url);
    console.log('ChatViewer init')
    this.connection = this.messageService.onMessage().subscribe((data) => {
      this.messages.push(data);
    });

    this.onPingSubscriber = this.messageService.onPing().subscribe((data) => {
      console.log("chatviewer got ip: " + data);
      this.ip = data;
    });
  }

  ngOnInit() {
    this.currentUrl = window.location.href.slice(0,-5) + "3000";
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
    this.onPingSubscriber.unsubscribe();
  }

}
