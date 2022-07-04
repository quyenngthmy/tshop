import { Component } from "@angular/core";

@Component ({
  selector: 'info_customer',
  templateUrl: './info_customer.component.html'
})
export class InfocustomerComponent {
  flagInfo = false;
  toggleInfo(){
    this.flagInfo = !this.flagInfo
  }
  flagNote = false;
  toggleNote(){
    this.flagNote = !this.flagNote
  }
}
