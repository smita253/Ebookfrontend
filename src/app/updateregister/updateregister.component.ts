import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Author } from '../Author';
import { RegisterServiceService } from '../service/register-service.service';

@Component({
  selector: 'app-updateregister',
  templateUrl: './updateregister.component.html',
  styleUrls: ['./updateregister.component.css']
})
export class UpdateregisterComponent implements OnInit {


  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  passwordPtn ='^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$'
  usernamePattern = "[A-Z][A-Za-z0-9]{3,20}"
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"



  registernumber:number;
  addRegisterDetails :Author=new Author();
  constructor(private route: ActivatedRoute,private registerservice:RegisterServiceService,private router:Router) { }

  ngOnInit(): void {
    this.registernumber=this.route.snapshot.params['registernumber'];
    console.log(this.registernumber)
    this.addRegisterDetails.registrationNumber=this.registernumber;
  }


  onSubmit(){
    console.log(this.addRegisterDetails);
  this.registerservice.UpdateRegister(this.addRegisterDetails).subscribe(data=> {this.goToEmployeeList(),  Swal .fire(
  '',
    'Data has been updated successfully',

    'success'
 )  } ,error =>
 
 Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'invalid values password =>1)register id is not valid , Minimum eight characters, at least one letter, one number and one special character" or mobilenumber should be 10 numbers ',
  footer: '<a href="">Why do I have this issue?</a>'})
 );
    // this.router.navigate(['/registerdetails']);
   
  }

  goToEmployeeList(){
    this.router.navigate(['/registerdetails']);
  }
}
