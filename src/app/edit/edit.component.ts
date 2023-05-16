import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});
  [x: string]: any;
  userId:number=0;
  userDetails: any;
  myData: any;
  utilz: any;
  constructor( private formBuilder:FormBuilder, private userService:UserService, private activatedRoute: ActivatedRoute ) { }
  
  ngOnInit(): void {
    let utilizatori = localStorage.getItem("utilizatori");

    if (utilizatori)
      this.utilz = JSON.parse(utilizatori);

    this.activatedRoute.params.subscribe( data => {
      this.userId = +data.id;
    } );
    
    this.userDetails = this.utilz.find( (x: { id: number; }) => x.id === this.userId );
    console.log(this.userDetails);
    this.editUserForm = this.formBuilder.group({
      'id': new FormControl(this.userDetails.id,[
        Validators.pattern('[- +()0-9]+')
      ]),
      'nume': new FormControl(this.userDetails.nume,[
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern('[- +()a-zA-Z]+')
      ]),
      'email': new FormControl(this.userDetails.email,[
        Validators.required,
        Validators.email
      ]),
      'telefon': new FormControl(this.userDetails.telefon,[
        Validators.minLength(10),
        Validators.maxLength(12),
        Validators.pattern('[- +()0-9]+')
      ]),
    });
  
  }

  updateUser () {
    this.myData = this.editUserForm.value; 
    console.log(this.myData);
    let utilizatoriList = localStorage.getItem("utilizatori");
    if (utilizatoriList)
      this.utilz = JSON.parse(utilizatoriList);
    this.userId = +this.myData.id;
    const indexNew = this.utilz.findIndex((item: any) => item.id=== this.userId);

    if (indexNew !== -1) {
      this.utilz[indexNew] = this.myData;
    }

    let u = JSON.stringify(this.utilz);
    localStorage.setItem('utilizatori', u);
  }
}
