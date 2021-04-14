import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Todo List';
  form: FormGroup;
  value = '';
  list = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(){
    this.form = this.formBuilder.group({
      item: new FormControl()
    });
  }

  // lo meti dentro de un if para corroborar que haya escrito algo, sino sumaba a la lista items vacios
  addItem(){
    if(this.form.get('item').value.length > 0){
      const item = {
        value: this.form.get('item').value,
        completed: false
      };
      this.list.push(item);
    }
  }

  deleteItem(position){
    this.list.splice(position, 1);
  }

  // le asigno el opuesto para poder cambiar la clase dinamicamente
  completeTask(position){
    this.list[position].completed = !this.list[position].completed;
  }
}
