import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-set-name',
  templateUrl: './set-name.component.html',
  styleUrls: ['./set-name.component.css']
})

export class SetNameComponent implements OnInit {
  name: string;
  @Output() onNameSet = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  setName(): void {
    this.onNameSet.emit(this.name);
  }
}
