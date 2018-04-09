import { Injectable } from '@angular/core';
import { Message } from './message';
import { MESSAGES } from './messages.mock'

@Injectable()
export class MessageService {

  constructor() { }

  getMessages(): Message[] {
    return MESSAGES;
  }

  addMessage(author: string, message: string): void {
    //TODO
  }
}