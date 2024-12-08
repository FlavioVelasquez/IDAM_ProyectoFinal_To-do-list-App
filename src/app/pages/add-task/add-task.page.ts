import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage {
  title = '';
  description = '';
  type: 'Trabajo' | 'Casa' | 'Negocios' = 'Trabajo';

  constructor(private taskService: TaskService, private router: Router) {}

  addTask(): void {
    if (this.title.trim()) {
      this.taskService.addTask({
        id: 0,
        title: this.title,
        description: this.description,
        type: this.type,
        completed: false,
      });
      this.router.navigate(['/home']); 
    }
  }
}
