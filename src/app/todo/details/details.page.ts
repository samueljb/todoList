import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService, Todo } from 'src/app/services/todo.service';
import { ToastController, NavController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  id = null;

  todo: Todo = {
    name: '',
    notes: ''
  };
 
  constructor(public toastController: ToastController, private http: Http,
              public nav: NavController, private activatedRoute: ActivatedRoute, private todoService: TodoService,
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
 
  deleteTodo() {
    this.todoService.deleteTodo(this.todo.id).then(() => {
      this.nav.navigateBack('list');
      this.showToast('Todo deleted');
    }, err => {
      this.showToast('There was a problem deleting your todo :(');
    });
  }

  async sendIdToServer() {
    const toast = await this.toastController.create({
      message: 'x',
      duration: 1000
      });

    const url = environment.serverGCF.sendIdToServer + '/?id=' + this.id;
    console.log('url', url);
    this.http.get(url)
    .subscribe( (data) => {
      console.log('data', data);
      console.log(data.json().result);
        toast.message = 'resultado json:' + data.json().result;
        toast.present();
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
}
