import { Component } from "@angular/core";

@Component ({
  selector: 'list_msg',
  templateUrl: './list_msg.component.html'
})
export class ListmsgComponent {
  flag = true;
  toggleFilter(){
    this.flag = !this.flag
  }
}
