import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/usersService';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit{

  users: any[] = [];

  constructor(public usersService: UsersService, private cdr: ChangeDetectorRef){}

   ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers().subscribe({
      next: (users: any[]) => {
        console.log(users)
        this.users = users;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    })
  }
}
