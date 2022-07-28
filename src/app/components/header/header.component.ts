import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription;

  constructor(private uiService:UiService, private route:Router) {
    this.subscription = this.uiService.onToggleForm().subscribe((val) => {
      this.showAddTask = val;
    });
   }

  ngOnInit(): void {
  }

  ToggleAddForm() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string)  {
    return this.route.url === route;
  }

}
