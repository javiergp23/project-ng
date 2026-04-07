import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  // @Input()
  // msg: string = ""

  msg = input<string>('');
  // @Input()
  // person: any;

  person = input<any[]>();

  @Output()
  login: EventEmitter<any> = new EventEmitter<any>;

  username: string = 'Javier'
  handleLogin() {
    this.login.emit(this.username);
  }
}
