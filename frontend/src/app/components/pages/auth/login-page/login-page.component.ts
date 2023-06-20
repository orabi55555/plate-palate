import { Component,NgZone, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  //Form Validables
  registerForm: any = FormGroup;
  submitted = false;
  // googleAuth: any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private ngZone: NgZone) {


  }
  //Add user form actions
  get f() {
    return this.registerForm.controls;
  }

  ngOnInit() {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(60),
        ],
      ],
    });


  }


  // signInWithGoogle(): Promise<any> {
  //   return new Promise<any>((resolve, reject) => {
  //     this.ngZone.run(() => {
  //       const provider = new firebase.auth.GoogleAuthProvider();
  //       this.afAuth.signInWithPopup(provider)
  //         .then((result) => {
  //           // Handle successful sign-in
  //           resolve(result);
  //         })
  //         .catch((error) => {
  //           // Handle sign-in error
  //           reject(error);
  //         });
  //     });
  //   });
  // }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {
      this.authService.login(this.registerForm.value).subscribe({
        next: response => {console.log (response);
                 this.router.navigateByUrl('/home');

          // Login successful, do something with the response
        },
        error: error => {
          // Login failed, handle the error
        }
      });}
      // this.router.navigateByUrl('/home');
}

}



