import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';


export interface Todo {
  id?: string,
  name: string,
  notes: string
}
 
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Observable<Todo[]>;
  private todoCollection: AngularFirestoreCollection<Todo>;
 
  constructor(private afs: AngularFirestore) {
    this.todoCollection = this.afs.collection<Todo>('todos');
    this.todos = this.todoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getTodos(): Observable<Todo[]> {
    return this.todos;
  }
 
  getTodo(id: string): Observable<Todo> {
    return this.todoCollection.doc<Todo>(id).valueChanges().pipe(
      take(1),
      map(todo => {
        todo.id = id;
        return todo
      })
    );
  }
 
  addTodo(todo: Todo): Promise<DocumentReference> {
    return this.todoCollection.add(todo);
  }
 
  updateTodo(todo: Todo): Promise<void> {
    return this.todoCollection.doc(todo.id).update({ name: todo.name, notes: todo.notes });
  }
 
  deleteTodo(id: string): Promise<void> {
    return this.todoCollection.doc(id).delete();
  }
}