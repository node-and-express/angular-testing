import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public apiService:ApiService) { }

  users: []=[];
  
  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() : void{
    this.users=[];
    this.apiService.getAll().subscribe((data: any)=>{
      this.users=data;
      console.log(data);
    })
  }

}
