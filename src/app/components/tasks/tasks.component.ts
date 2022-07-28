import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTask().subscribe((task) => {
      this.tasks = task;
    });
  }

  deleteTask(task: Task) {
    console.log(task);
    this.taskService.delTask(task).subscribe(() =>{
      this.tasks = this.tasks.filter((tks) => tks.id !== task.id );
    });
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.toggleRem(task).subscribe();
  }

  addNewTask(task: Task){
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }

}
