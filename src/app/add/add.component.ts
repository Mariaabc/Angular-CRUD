import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});
  [x: string]: any;

  userDetails: any;
  myData: any;
  utilz: any;
  
  constructor( private formBuilder:FormBuilder, private userService:UserService, private activatedRoute: ActivatedRoute ) { }
  
  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'id': new FormControl('7',[
        Validators.pattern('[- +()0-9]+')
      ]),
      'nume': new FormControl('ggg',[
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern('[- +()a-zA-Z]+')
      ]),
      'email': new FormControl('ggg@g.com',[
        Validators.required,
        Validators.email
      ]),
      'telefon': new FormControl('7777',[
        Validators.minLength(10),
        Validators.maxLength(12),
        Validators.pattern('[- +()0-9]+')
      ]),
    })
  }

  createUser () {

    this.myData = this.addUserForm.value;

    let utilizatoriList = localStorage.getItem("utilizatori");
    if (utilizatoriList)
      this.utilz = JSON.parse(utilizatoriList);
    this.myData.id=+this.myData.id;

    this.utilz.push(this.myData);
    
    let u = JSON.stringify(this.utilz);
    localStorage.setItem('utilizatori', u);
  }
}
