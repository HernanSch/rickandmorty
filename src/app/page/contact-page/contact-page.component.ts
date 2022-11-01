import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  userRegisterForm!: FormGroup;

  isSubmit : boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userRegisterForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      role: ["Alumno", [Validators.minLength(5)]],
      age: [18, [Validators.required, Validators.min(18), Validators.max(99)]]
    })

  }

  submit(){
    this.isSubmit = true;
    console.log(this.userRegisterForm);
    console.log(this.userRegisterForm.value);
  }


}
