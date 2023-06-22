import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    if (this.submitted) {
      this.authService.register(this.signupForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigateByUrl('/home');
        },
      });
      console.log(this.signupForm.value);
    }
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      user_name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z0-9]+$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      address: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
          Validators.pattern('^[a-zA-Z0-9]+$'),
        ],
      ],
      gender: ['', [Validators.required]],
      mobile: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.pattern('^[0-9]+$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(60),
        ],
      ],
      // confirmPassword: [
      //   '',
      //   [Validators.required, this.matchPasswords.bind(this)],
      // ],
      // gender : ['', [Validators.required]],
      // role : ['', [Validators.required]],
      // mobile: ['', [Validators.required]],
    });
  }

  matchPasswords(control: any) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      return { passwordsMismatch: true };
    }

    return null;
  }
}
