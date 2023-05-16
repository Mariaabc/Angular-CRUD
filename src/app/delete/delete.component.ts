import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

import { find } from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  userId: number = 0;
  index!: number;
  utilizatori: any;
  constructor( private userService:UserService, private activatedRoute: ActivatedRoute ) { }
  
  ngOnInit(): void {
    let util = localStorage.getItem("utilizatori");

    if (util)
      this.utilizatori = JSON.parse(util);
      this.activatedRoute.params.subscribe( data => {
        this.userId = +data.id;
      } );

    const indexNew = this.utilizatori.findIndex((item: any) => item.id=== this.userId);
    this.utilizatori.splice(indexNew,1);
   
    let jsonString = JSON.stringify(this.utilizatori);
    localStorage.setItem('utilizatori', jsonString);
  }

}