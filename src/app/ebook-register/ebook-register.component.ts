import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Author } from '../Author';
import { RegisterServiceService } from '../service/register-service.service';



@Component({
  selector: 'app-ebook-register',
  templateUrl: './ebook-register.component.html',
  styleUrls: ['./ebook-register.component.css']
})
export class EbookRegisterComponent implements OnInit {

  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  passwordPtn ='^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$'
  usernamePattern = "[A-Z][A-Za-z0-9]{3,20}"
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  

  addRegisterDetails: Author = new Author();
  constructor(private regsisterservice:RegisterServiceService,private router :Router) { }
  ngOnInit(): void {
  }
  onSubmit(){    
    console.log(this.addRegisterDetails);
    this.regsisterservice.AddRegister(this.addRegisterDetails).subscribe(data =>{ Swal.fire( 
      "",
      'Data has been inserted successfully',
        'success'    
     )},error =>
     Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'invalid values password =>Minimum eight characters, at least one letter, one number and one special character" or mobilenumber should be 10 numbers ',
      footer: '<a href="">Why do I have this issue?</a>'})
     );
    //  this.router.navigate(['/texteditor']);
     this.router.navigate(['/registerdetails']);
  }
  goToEmployeeList(){
    // this.router.navigate(['/texteditor']);
    this.router.navigate(['/registerdetails']);
  }
}