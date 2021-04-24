import { Injectable } from '@angular/core';
import { TodoItem } from './model/todo-item';

const STORAGE_KEY = 'todoList';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  // https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
  constructor() { }

  getName() {
    return 'LocalStorageService';
  }

  save(list: TodoItem[]) {
    return localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  get() {
    const itemsJson = localStorage.getItem(STORAGE_KEY);
    if(itemsJson) {
      return JSON.parse(itemsJson).map(item => new TodoItem(item));
    } else {
      return [];
    }  
  }

  clear() {

  }
}
