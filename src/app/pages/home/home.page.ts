import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  pendingTasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  ionViewWillEnter(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    const allTasks = this.taskService.getTasks();
    this.pendingTasks = allTasks.filter(task => !task.completed);
    this.completedTasks = allTasks.filter(task => task.completed);
  }

  viewTaskDetails(taskId: number): void {
    this.router.navigate(['/task-details', taskId]); 
  }

  completeTask(taskId: number): void {
    this.taskService.toggleTaskCompletion(taskId);
    this.loadTasks();
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.loadTasks();
  }
}