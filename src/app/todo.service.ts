import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  list = [];
  lastItemId = 0;

  constructor(private storage: LocalStorageService) { }
  
  add(task) {
    const id = this.lastItemId;
    task.id = id;
    this.list.push(task);
    this.lastItemId += 10;
    this.storage.save(this.list);
  }

  save(){
    this.storage.save(this.list);
  }

  load() {
    this.list = this.storage.get();
  }

  remove(id) {
    const index = this.list.findIndex((element) => element.id === id);
    this.list.splice(index, 1);
    this.storage.save(this.list);
  }

  incompletedSize() {
    return this.list.filter(item => !item.isCompleted).length;
  }

  completedSize() {
    
    return this.list.filter(item => item.isCompleted).length;
  }

  getName() {
    return 'TodoService 123' + this.storage.getName();
  }
}
