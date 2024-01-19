import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get("http://localhost:3000/items");
  }

  getById(id: number) {
    return this.http.get("http://localhost:3000/items/" + id);
  }

  add(item: any) {
    return this.http.post("http://localhost:3000/items", item);
  }

  remove(id: number) {
    return this.http.delete("http://localhost:3000/items/" + id);
  }

  update(item: any) {
    return this.http.put("http://localhost:3000/items/update", item);
  }
}
