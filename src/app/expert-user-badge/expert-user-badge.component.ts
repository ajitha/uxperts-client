import { Component, Input, OnChanges } from '@angular/core';
import { ExpertUser } from '../Interfaces/ExpertUser';

@Component({
  selector: 'app-expert-user-badge',
  templateUrl: './expert-user-badge.component.html',
  styleUrls: ['./expert-user-badge.component.scss']
})
export class ExpertUserBadgeComponent implements OnChanges {

  @Input()
  user: ExpertUser | undefined;

  constructor() { }
  

  ngOnChanges() {
    console.log(this.user);
  }

}
