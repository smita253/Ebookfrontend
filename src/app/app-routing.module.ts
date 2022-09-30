import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteregisterComponent } from './deleteregister/deleteregister.component';
import { EbookRegisterComponent } from './ebook-register/ebook-register.component';
import { GetFilesComponent } from './get-files/get-files.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterDetailsComponent } from './register-details/register-details.component';
import { TexteditorComponent } from './texteditor/texteditor.component';
import { UpdateregisterComponent } from './updateregister/updateregister.component';
import { UploadFileComponentComponent } from './upload-file-component/upload-file-component.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: ' ', component:HomeComponent},
  // {path: 'navbar', component:NavbarComponent},
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'user', component:UserComponent},
  {path: 'createbook', component:CreateBookComponent},
  {path: 'booklist', component:BookListComponent},
  {path: 'addregisterDetails', component:EbookRegisterComponent},
  {path:'registerdetails',component:RegisterDetailsComponent},
  {path:'deleteregister/:registrationnumber' ,component:DeleteregisterComponent},
  {path:'updateregisterdetails/:registrationnumber' ,component:UpdateregisterComponent},
  {path:'uploadbook',component:UploadFileComponentComponent},
  {path:'getuploadedfiles',component:GetFilesComponent},
  {path:'texteditor',component:TexteditorComponent}

  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
