import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/usersService';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit{
  constructor(public usersService: UsersService){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers().subscribe({
      next: (users: any[]) => {
        this.usersService.users = users;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    })
  }
}
