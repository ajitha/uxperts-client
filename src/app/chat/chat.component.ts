import { Component } from '@angular/core';
import { Message } from '../Interfaces/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  currentMessageIndex: number = 0;
  chatOpen: boolean = true;
  messageQueue: Message[] = [];

  constructor() { }

  sendMessage(message: string) {

    if(message !== '') {
      this.messageQueue.push({
        index: this.currentMessageIndex,
        content: message,
        sender: 'User'
      });
      this.currentMessageIndex++;
    }
    
  }

}
