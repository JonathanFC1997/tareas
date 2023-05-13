import { Component } from '@angular/core';

interface Task {
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba_tecnica';
  tasks: Task[] = [
    { description: 'Comprar el super', completed: false },
    { description: 'Pagar la renta', completed: false },
    { description: 'Limpiar la casa', completed: true }
  ];
  newTask: string = '';


  completeTask(task: Task): void {
    task.completed = !task.completed;
  }

  addTask() {
    if (this.newTask.trim().length === 0) {
      return;
    }
    const newTask: Task = {
      description: this.newTask,
      completed: false
    };
    this.tasks.push(newTask);
    this.newTask = '';
  }

  get pendingTasks(): Task[] {
    return this.tasks.filter(task => !task.completed);
  }

  get completedTasks(): Task[] {
    return this.tasks.filter(task => task.completed);
  }
}
