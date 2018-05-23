import { Component, OnInit } from '@angular/core';

import { MessageService } from './message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // The messageService property must be public because you're about to bind to it in the template.
  // Angular only binds to public component properties.
  // messageService需要在html的template用到，但template
  constructor(public messageService: MessageService) {}


  ngOnInit() {
  }

}
