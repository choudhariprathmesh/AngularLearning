import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  isSubmitted:boolean=false;
  myReactiveForm: FormGroup;
     Submitted:boolean=false;
  myForm: FormGroup;
  notAllowedNames=['jack','harry']
  
  constructor(private _fb: FormBuilder) { 
    this.createForm();
    // this.creatingForm();
  }
 
  userDetailsForm: FormGroup;
  ngOnInit() {
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDeatils' : {
    //       'username': 'Codemind123',
    //       'email': 'codemind@gamil.com'
    //     },
    //     'course': 'HTML',
    //     'skills': ['angular']
    //   })
    // })
    
    // setTimeout(() => {
    //   this.myReactiveForm.patchValue({
    //     'userDeatils' : {
    //              'username': 'Codemind123',
    //             'email': 'codemind@gamil.com'
    //            }
    //   })
    // }, 5000)

    // this.userDetailsForm = new FormGroup({
    //   'fullName': new FormControl(null, Validators.required),
    //   'birthdate': new FormControl(null, Validators.required),
    //   'gender': new FormControl(null, Validators.required),
    //   'country': new FormControl(null, Validators.required),
    //   'phoneNumber': new FormControl(null, Validators.required),
    //   'bio': new FormControl(null)
    // });
  }
  // onSubmit() {
    // console.log(this.userDetailsForm.value);
    // Add your code to save the user details here
  // }
   
  createForm()
  {
    // this.myReactiveForm = new FormGroup({
    //   'userDeatils': new FormGroup({
    //     'username' : new FormControl(null, [Validators.required, this.NaNames.bind(this)]),
    //     'email': new FormControl(null, [Validators.required, Validators.email],this.NaEmails)        
    //   }),
    //   'course': new FormControl('Angular'),
    //   'gender': new FormControl('Male'),
    //   'skills': new FormArray([
    //     new FormControl(null, Validators.required)
    //   ])
    // });
    
      // using FormBuilder

    this.myReactiveForm = this._fb.group({
      userDeatils: this._fb.group({
        username: ['', [Validators.required, this.NaNames.bind(this) ]],
        email: ['', [Validators.required, Validators.email], this.NaEmails]
      }),
      course: ['Angular'],
      skills: this._fb.array([])
     })

  }

  OnAddSkills() {
    (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }
  // creatingForm(){
  //    this.myForm = new FormGroup({
  //      'email': new FormControl(null, [Validators.required, Validators.email]),
  //      'subscription': new FormControl('Advanced'),
  //      'password': new FormControl (null,[Validators.required]),
  //      'date': new FormControl (null, [Validators.required])
  //   });
  // }

  OnSubmit() {
    this.isSubmitted=true;
    // alert('method called');
    console.log('My ReactiveForm', this.myReactiveForm.value)
  }
  

  NaNames(control: FormControl) {
    if(this.notAllowedNames.indexOf(control.value) !== -1) {
      return {'namesNotAllowed': true}
    } else {
      return null;
    }

  }
  NaEmails(control: FormControl) : Promise<any> | Observable<any>
  {
    const myResponse = new Promise<any> ((resolve, reject) => {
      setTimeout(() => {
        if(control.value == 'codemindtechnology@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 1000)
    })
    return myResponse;
  } 

  // isSubmit() {
  //     this.Submitted=true;
  //   //   alert('method called');
  //     console.log('My ReactiveForm', this.myForm.value)
  //   }

  //    futureDateValidator(control) {
  //     const selectedDate = new Date(control.value);
  //     const now = new Date();
    
  //     if (selectedDate < now) {
  //       return { futureDate: true };
  //     }
    
  //     return null;
  //   }

   
}


