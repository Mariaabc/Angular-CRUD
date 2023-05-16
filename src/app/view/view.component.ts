import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

import utilizatori1 from '../utilizatori.json';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  [x: string]: any;

  userId: number = 0;
  userDetails: any;

  constructor( private userService:UserService, private activatedRoute: ActivatedRoute ) { }
  
  ngOnInit(): void {
    let utilizatori = localStorage.getItem("utilizatori");

    if (utilizatori)
      this.utilz = JSON.parse(utilizatori);

    this.activatedRoute.params.subscribe( data => {
      this.userId = +data.id;
    } );
   
    this.userDetails = this.utilz.find( (x: { id: number; }) => x.id === this.userId );
    console.log(this.userDetails);
  }

}
