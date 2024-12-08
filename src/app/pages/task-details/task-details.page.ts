import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(taskId);
  }

  toggleCompletion(): void {
    if (this.task) {
      this.taskService.toggleTaskCompletion(this.task.id);
    }
  }

  goBack(): void {
    this.router.navigate(['/home']); 
  }

  deleteTask(): void {
    if (this.task) {
      this.taskService.deleteTask(this.task.id); 
      this.router.navigate(['/home']); 
    }
  }
}
