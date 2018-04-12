import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Message, MessageType } from './message';
import * as io from 'socket.io-client';


@Injectable()
export class MessageService {
  private URL = 'http://localhost:3000';
  private socket;
  private messageObservable;
  private subject: Subject<Message>;
  private name: string;

  constructor() { }

  public initSocket(url: string = this.URL): void {
    this.socket = io(url);
  }

  public onMessage(): Observable<Message> {
      return new Observable<Message>(observer => {
          this.socket.on('message', (data: Message) => {
            data.type = MessageType.CHAT;
            observer.next(data);
          });
          this.socket.on('personal', (data: Message) => {
            data.type = MessageType.INFO;
            observer.next(data)
          });
      });
  }

  public sendInfo(author: string, message: string): void {
    this.socket.emit('info-message', {author: author, message: message, type: MessageType.INFO});
  }

  public sendMessage(author: string, message: string): void {
    this.socket.emit('add-message', {author: author, message: message, type: MessageType.CHAT});
  }

  public isConnected(): boolean {
    return this.socket != null;
  } 
}