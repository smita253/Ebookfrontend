import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../Author';
import { RegisterServiceService } from '../service/register-service.service';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css']
})
export class RegisterDetailsComponent implements OnInit {

  // Registrationnumber:number;
  authors:Author[];


  getregisterdetails : Author = new Author();
  constructor( private regservice: RegisterServiceService,  private route: ActivatedRoute ,private router: Router) { }

  ngOnInit(): void {
    this.getRegister();
//     this.Registrationnumber=this.route.snapshot.params['registrationnumber'];
//     console.log(this.Registrationnumber)
//     this.authors.registrationNumber=this.Registrationnumber;
//   this.regservice.getUserByRegistrationNumber(this.Registrationnumber).subscribe(data =>{this.authors=data})
  
//  console.log(this.authors);
//      console.log(this.authors);
}

getRegister(){
  this.regservice.getRegister().subscribe(data =>{this.authors=data})
  console.log(this.authors);
  console.log(this.authors);
}
updateLogincd(regno:number){
  this.router.navigate(['updateregisterdetails',regno]);
}

 deleteLogincd(regno:number){
  this.router.navigate(['deleteregister',regno]);
}


createBook(){
  this.router.navigate(['/texteditor']);
}
}