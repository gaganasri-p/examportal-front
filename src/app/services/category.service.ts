import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }
  public categories(){
    return this._http.get('http://16.170.55.198:8080/category/');
  }

  public addCategory(category:any){
    return this._http.post('http://16.170.55.198:8080/category/',category);
  }

  public deleteCategory(cid:any){
    return this._http.delete('http://16.170.55.198:8080/category/'+cid);
  }
}
