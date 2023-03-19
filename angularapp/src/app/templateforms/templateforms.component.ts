import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { MyserviceService } from "../services/myservice.service";

@Component({
  selector: "app-templateforms",
  templateUrl: "./templateforms.component.html",
  styleUrls: ["./templateforms.component.css"],
})
export class TemplateformsComponent implements OnInit {

  age;
  showAge;

  // email: string;
  // isValidEmail: boolean = true;
  // validateEmail(email: string) {
  //   if (email.endsWith('@codemindtechnology.com')) {
  //     this.isValidEmail = true;
  //   } else {
  //     this.isValidEmail = false;
  //   }
  // }

  // isSubmitted: boolean = false;
  // formData  = {
  //   email: '',
  //   password: '',
  //   course: '',
  //   gender: ''
  // }
  defaultValue = 'Angular';
  defaultGender = 'Male';
  courses: string[] = ['Angular', 'Javascript', 'Typescript'];
  genders = [ 
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]
  constructor(private objService:MyserviceService,private route: Router) { }

  ngOnInit() {

// this.objService.display();
// this.objService.print();
  }

//   login(form: NgForm) {
//     this.isSubmitted = true;
// console.log(form);

//  this.formData.email = form.value.email;
//  this.formData.password = form.value.password;
//  this.formData.course = form.value.course;
//  this.formData.gender = form.value.gender;
//form.reset();

// form.controls['course'].setValue('Angular');
// form.controls['gender'].patchValue('Male');

// POST api/ Saveuser(formData);
city: string[] = ['Mumbai', 'Kolkata', 'Delhi'];
defaultCity='Mumbai'
user = {
firstName: '',
lastName: '',
age: null,
email: '',
phone: '',
city: '',
gender: '',
password: ''
};

confirmPassword: string = '';

onSubmit(form: NgForm) {
console.log(form);
if (form.valid && this.confirmPassword === this.user.password) {
// submit the form
this.route.navigate(['/userdetails']);
}
}

ageCalculator(){
  this.showAge = this.objService.ageCalculator(this.age);
}


   }
  // checkemail(email){
  //   console.log(email.value);

  //   const domain = email.value.substring(email.value.lastIndexOf('@') + 1); // gmail.com
    
  //   if(domain.toLowerCase() === 'codemindtechnology.com') 
  //   {
  //     this.isEmailValid = false;
  //   } else {
  //     this.isEmailValid = true;
  //   }
  // }
 
