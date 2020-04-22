import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private Http: HttpClient) { }
  

  getAllPostanges(){
    return this.Http.get('http://31.220.57.14:8080/postagens');
  }


}
