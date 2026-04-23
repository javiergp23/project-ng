import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  readonly API_URL = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient){

  }

  getUsers(){
    return this.http.get<any[]>(this.API_URL)
  }

  getUser(id: number){
    return this.http.get<any>(`${this.API_URL}/${id}`)
  }
}

