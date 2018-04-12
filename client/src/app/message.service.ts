import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from './message';
import * as io from 'socket.io-client';


@Injectable()
export class MessageService {
  private URL = 'http://localhost:3000';
  private socket;
  private messageObservable;

  constructor() { 
    this.createObservable();
  }

  getMessageObservable() {
    return this.messageObservable;
  }

  createObservable(url: string = this.URL) {
    this.socket = io(url);
    this.messageObservable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
        console.log(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
  }

  sendMessage(author: string, message: string): void {
    this.socket.emit('add-message', {author: author, message: message})
  }

}