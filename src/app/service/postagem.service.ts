import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private Http: HttpClient) { }
  

  getAllPostanges(){
    return this.Http.get('http://31.220.57.14:8080/postagens');
  }

  postPostagens(postagem: Postagem){
    return this.Http.post('http://31.220.57.14:8080/postagens', postagem)
  }

  putPostagem(postagem: Postagem) {
    return this.Http.put('http://31.220.57.14:8080/postagens', postagem)
  }


  getByIdPostagem(id: number) {
    return this.Http.get(`http://31.220.57.14:8080/postagens/${id}`)
  }

  deletePostagem(id: number) {
    return this.Http.delete(`http://31.220.57.14:8080/postagens/${id}`)
  }

}
