import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-viewer',
  templateUrl: './chat-viewer.component.html',
  styleUrls: ['./chat-viewer.component.css']
})
export class ChatViewerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('ChatViewer init')
  }

}
