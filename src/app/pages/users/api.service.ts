import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private httpClient: HttpClient) { }

  //api setting
  private apiURL = "https://jsonplaceholder.typicode.com";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


   /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(){
    return this.httpClient.get(this.apiURL + '/posts')
    //catch error here

  }

}
