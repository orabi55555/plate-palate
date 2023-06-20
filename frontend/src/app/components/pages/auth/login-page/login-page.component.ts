import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
declare const gapi: any;



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  //Form Validables
  registerForm: any = FormGroup;
  submitted = false;
  googleAuth: any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {



      // gapi.load('auth2', () => {
      //   this.googleAuth = gapi.auth2.init({
      //     client_id: 'YOUR_GOOGLE_CLIENT_ID',
      //     scope: 'email profile openid',
      //   });
      // });


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

// onGoogleSignIn() {
//   this.googleAuth
//     .signIn()
//     .then((googleUser: any) => {
//       const idToken = googleUser.getAuthResponse().id_token;
//       this.authService.googleSignIn(idToken).subscribe({
//         next: (response) => {
//           console.log(response);
//           this.router.navigateByUrl('/home');
//           // Google Sign-In successful, do something with the response
//         },
//         error: (error) => {
//           // Google Sign-In failed, handle the error
//         },
//       });
//     })
//     .catch((error: any) => {
//       console.log(error);
//     });
// }
}



