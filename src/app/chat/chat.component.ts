import { Component } from '@angular/core';
import { Message } from '../Interfaces/message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  currentMessageIndex: number = 0;
  chatOpen: boolean = false;
  messageQueue: Message[] = [];

  constructor(
    private messageService: MessageService
  ) { }

  sendMessage(message: string) {

    if(message !== '') {
      this.messageQueue.push({
        index: this.currentMessageIndex,
        content: message,
        sender: 'User'
      });
      this.currentMessageIndex++;


      let tempAIMessage: Message = {
        index: this.currentMessageIndex,
        content: '',
        sender: 'AI',
        loading: true
      };
      this.messageQueue.push(tempAIMessage);

      this.messageService.sendMessage(message).subscribe((response: any) => {
        console.log(response);
        this.messageQueue.pop();
        this.messageQueue.push({
          index: this.currentMessageIndex,
          content: response.content,
          sender: 'AI',
          expertUsers: response.expertUsers
        });
        this.currentMessageIndex++;
      });
    }
  }

}
