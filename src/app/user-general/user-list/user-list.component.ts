import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users: User[];
  @Output() deleteEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitUserDeletion(userId: any): void {
    this.deleteEventEmitter.emit(userId);
  }

}
