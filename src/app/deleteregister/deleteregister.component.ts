import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Author } from '../Author';
import { RegisterServiceService } from '../service/register-service.service';

@Component({
  selector: 'app-deleteregister',
  templateUrl: './deleteregister.component.html',
  styleUrls: ['./deleteregister.component.css']
})
export class DeleteregisterComponent implements OnInit {
registrationnumber:number;
deleteRegister:Author =  new Author();
constructor(private regservice:RegisterServiceService,private route:ActivatedRoute,private router:Router){}

ngOnInit(): void {
  this.registrationnumber=this.route.snapshot.params['registrationNumber'];
  console.log(this.registrationnumber)
this.deleteRegister.registrationNumber=this.registrationnumber;
}

onSubmit(){
  console.log(this.registrationnumber);
  console.log(this.deleteRegister.registrationNumber)
  console.log(this.deleteRegister);
  this.regservice.deleteRegister(this.deleteRegister.registrationNumber).subscribe( 
 (data:any)=> { Swal .fire(
    '',
      'account has been deleted successfully',
  
      'success'
   )  } 
   ,error =>
   
   Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'invalid values password =>1)register id is not valid , Minimum eight characters, at least one letter, one number and one special character" or mobilenumber should be 10 numbers ',
    footer: '<a href="">Why do I have this issue?</a>'})
   );
    
   this.router.navigate(['/registerdetails']);

 }
// goToEmployeeList(){
//    this.router.navigate(['/registerdetails']);
// }
// this.goToEmployeeList()
}