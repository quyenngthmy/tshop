import { Component } from "@angular/core";

@Component({
  selector: 'sidebar',

  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  flag = true;
  toggle(){
    this.flag = !this.flag
  }
}
