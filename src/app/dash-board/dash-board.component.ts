import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  // Definerar datatyp och värde av userList och userNamn
userList : string[]=[];
userNamn : string;

  //UserNamn hämtas från inputfält och läggs till i arrayen userList
addUserName(event):void{
  this.userNamn = event;
  this.userList.push(this.userNamn);
}
  //funktionen tar bort sista namnet i userList när man klickar på knappen Remove
removeUserName(event):void {
  this.userList.pop();
}
  constructor() { }

  ngOnInit() {
  }

}
