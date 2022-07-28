import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {
    text: "",
    day: "",
    reminder: true
  };

  @Output() onDelClick: EventEmitter<Task> = new EventEmitter();
  @Output() onRemClick: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelTask(task:Task) {
    this.onDelClick.emit(task);
  }

  toggleReminder(task:Task){
    this.onRemClick.emit(task);
  }

}
