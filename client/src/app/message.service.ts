import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from './message';
import * as io from 'socket.io-client';


@Injectable()
export class MessageService {
  private URL = 'http://localhost:3000';
  private socket;
  private messageObservable;

  constructor() { }

  public initSocket(url: string = this.URL): void {
    this.socket = io(url);
  }

  public onMessage(): Observable<Message> {
      return new Observable<Message>(observer => {
          this.socket.on('message', (data: Message) => observer.next(data));
      });
  }

  public sendMessage(author: string, message: string): void {
    this.socket.emit('add-message', {author: author, message: message})
  }

  public isConnected(): boolean {
    return this.socket != null;
  }
}