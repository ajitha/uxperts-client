import { Component, Input } from '@angular/core';
import { ExpertUser } from '../Interfaces/ExpertUser';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent {
  @Input()
  content: string = ''

  @Input()
  sender: 'AI' | 'User' = 'User'

  @Input()
  loading: boolean = false;

  avatarUrl?: string;
  
  expertUsers?: ExpertUser[];
}
