import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
    providedIn: 'root',
  })
  export class TaskService {
    private tasks: Task[] = [];
    private idCounter = 1;
  
    constructor() {}
  
    getTasks(): Task[] {
      return this.tasks;
    }
  
    addTask(task: Task): void {
      task.id = this.idCounter++;
      this.tasks.push(task);
    }
  
    deleteTask(taskId: number): void {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
  
    toggleTaskCompletion(taskId: number): void {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    }
  
    getTaskById(taskId: number): Task | undefined {
      return this.tasks.find(task => task.id === taskId);
    }
  }