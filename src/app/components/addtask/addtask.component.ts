import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string = "";
  day: string = "";
  reminder: boolean = false;

  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggleForm().subscribe((val) => {
      this.showAddTask = val;
    });
   }

  ngOnInit(): void {
  }

  onSubmitTask() {
    if(!this.text){
      alert('Please add a task.');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.onAddTask.emit(newTask);

    this.text = "";
    this.day = "";
    this.reminder = false;
  }

}
