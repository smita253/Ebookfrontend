import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../user';
import { UserSService } from '../user-service/user-s.service';
 


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
usernamePattern = "[A-Z][A-Za-z0-9]{3,20}"
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"


addUser: User = new User();
constructor(private userservice:UserSService,private router :Router) { }
ngOnInit(): void {
}
onSubmit(){    
  console.log(this.addUser);
  this.userservice.addUser(this.addUser).subscribe(data =>{ this.goToEmployeeList(), Swal.fire( 
    "",
    'Data has been inserted successfully',
      'success'    
   )},error =>
   Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'invalid values username =>Minimum four characters" or email pattern is not followed ',
    footer: '<a href="">Why do I have this issue?</a>'})
   );
  //  this.router.navigate(['/registerdetails']);
}
goToEmployeeList(){
  this.router.navigate(['/booklist']);
}
}