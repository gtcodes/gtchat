import { Injectable } from '@angular/core';
import { Message } from './message';


@Injectable()
export class MessageService {

  constructor() { }

  getMessages(): Message[] {
    return;
  }

  addMessage(author: string, message: string): void {
    //TODO
  }
}