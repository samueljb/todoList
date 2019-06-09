import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.page.html',
  styleUrls: ['./create-update.page.scss'],
})
export class CreateUpdatePage implements OnInit {

  
  id = null;

  todo: Todo = {
    name: '',
    notes: ''
  };
 
  constructor(public nav: NavController,
    private activatedRoute: ActivatedRoute, private todoService: TodoService,
              private toastCtrl: ToastController, private router: Router) { }
 
  ngOnInit() { }
 
  ionViewWillEnter() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.todoService.getTodo(this.id).subscribe(todo => {
        this.todo = todo;
      });
    }
  }
 
  addTodo() {
    this.todoService.addTodo(this.todo).then(() => {
      this.nav.navigateBack('list');
      this.showToast('Todo added');
    }, err => {
      this.showToast('There was a problem adding your todo :(');
    });
  }
 
  deleteTodo() {
    this.todoService.deleteTodo(this.todo.id).then(() => {
      this.nav.navigateBack('list');
      this.showToast('Todo deleted');
    }, err => {
      this.showToast('There was a problem deleting your todo :(');
    });
  }
 
  updateTodo() {
    this.todoService.updateTodo(this.todo).then(() => {
      this.nav.navigateBack('details/' + this.id);
      this.showToast('Todo updated');
    }, err => {
      this.showToast('There was a problem updating your todo :(');
    });
  }
 
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }


}
