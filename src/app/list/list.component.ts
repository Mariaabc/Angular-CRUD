import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

import utilizatori from '../utilizatori.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  utilz: any;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let utilizatoriList = localStorage.getItem("utilizatori");

    if (utilizatoriList)
      this.utilz = JSON.parse(utilizatoriList);

    //localStorage.setItem('utilizatori', "");
    let fromStorage = localStorage.getItem("utilizatori");
    if (!fromStorage || fromStorage == "") {
      let jsonString = JSON.stringify(utilizatori);
      localStorage.setItem('utilizatori', jsonString);
    }

  }

}





