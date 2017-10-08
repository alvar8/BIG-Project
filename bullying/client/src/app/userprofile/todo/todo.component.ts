import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todos;
randomNumber1;
randomNumber2;
randomNumber3;
  constructor(public todoget: TodoService) { }

  ngOnInit() {
    console.log("heyyyy")
    this.todoget.getToDo().subscribe(todolist => this.todos=todolist);
    this.randomNumber1=Math.round((Math.random()*3))
    this.randomNumber2=Math.round((Math.random()*3))
    this.randomNumber3=Math.round((Math.random()*3))
  }

}
