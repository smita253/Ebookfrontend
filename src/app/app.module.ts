import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EbookRegisterComponent } from './ebook-register/ebook-register.component';
import { UpdateregisterComponent } from './updateregister/updateregister.component';
import { TestComponent } from './test/test.component';
import{UploadFileComponentComponent} from './upload-file-component/upload-file-component.component';
import { RegisterDetailsComponent } from './register-details/register-details.component';
import { DeleteregisterComponent } from './deleteregister/deleteregister.component';
import{GetFilesComponent} from './get-files/get-files.component'
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { FilterPipe } from './filter.pipe';
import { DocumentEditorModule } from '@txtextcontrol/tx-ng-document-editor';
import { TexteditorComponent } from './texteditor/texteditor.component';
import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
    EbookRegisterComponent,
    UpdateregisterComponent,
    TestComponent,
    RegisterDetailsComponent,
    DeleteregisterComponent,
    BookListComponent,
    UploadFileComponentComponent,
    GetFilesComponent,
    CreateBookComponent,
    FilterPipe,
    TexteditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DocumentEditorModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
