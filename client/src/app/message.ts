export enum MessageType {
    CHAT,
    INFO
}

export class Message {
    author: string;
    message: string;
    type: MessageType;
}