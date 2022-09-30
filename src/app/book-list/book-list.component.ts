import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadFileService } from 'src/bookuploadService/upload-file.service';
import { Book } from '../book';
import { BookService } from '../Book-Service/book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(
    
    private bookService: BookService,
    private router: Router
    // private readService:UploadFileService
  ) {}

  book: Book[] = [];
  nameSearch: string = '';
  

  ngOnInit(): void {
    this.getBooksList();console.log("hi")
  }

 
  private getBooksList() {
    this.bookService.getBooksList().subscribe((data) => {
      this.book = data;
      // this.router.navigate(['uploadedbooklist']);
    });
  }

read(){
  this.router.navigate(['/getuploadedfiles']);
}

}