import { Component, OnInit } from '@angular/core';

import{FormControl,FormGroup,FormBuilder,FormArray} from '@angular/forms';
import{Validators} from '@angular/forms'

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.scss']
})
export class EditusersComponent implements OnInit {
  associateDetails:FormGroup;
submitted=false;

  constructor(private fb:FormBuilder){}
  ngOnInit(): void {


  this.associateDetails=this.fb.group({

      username:['',[Validators.required,Validators.maxLength(12),Validators.pattern('^([A-z]*((\\s[A-Za-z])?[a-z]*)*)$')]],
      lastname:['',[Validators.required,Validators.maxLength(12),Validators.pattern('^([A-z]*((\\s[A-Za-z])?[a-z]*)*)$')]],
      location:['',[Validators.required,Validators.maxLength(15),Validators.pattern('^([A-z]*((\\s[A-Za-z])?[a-z]*)*)$')]],
      id:['',[Validators.required,Validators.maxLength(15),Validators.pattern('^[0-9]*$'),Validators.minLength(10)]],
      age:['',[Validators.required,Validators.maxLength(3),Validators.pattern('^[0-9]*$'),Validators.minLength(1)]],
      email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      
      
      
    })
  }

  




  get username(){
    return this.associateDetails.get('username');
  }

  get lastname(){
    return this.associateDetails.get('lastname');
  }

  get id(){
    return this.associateDetails.get('id');
  }

  get location(){
    return this.associateDetails.get('location');
  }

  get age()
  {
    return this.associateDetails.get('age')
  }

  get email()
  {
    return this.associateDetails.get ('email')
  }

  

  

detailsSubmit(){
  console.log(this.associateDetails.value)
}

onSubmit(){
  this.submitted = true;
  if (this.associateDetails.valid){
    //console.log(this.associateDetails)
    console.log(this.associateDetails.value)
    //console.log(this.associateDetails.get("skills").value)

    alert("Form Submitted successfully")
    
    //this.associateDetails.reset();
  
  }
}


onReset() {
  this.submitted = false;
  this.associateDetails.reset();
}

}


