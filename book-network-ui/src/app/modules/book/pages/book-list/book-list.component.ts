import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../../services/services';
import { BookResponse, PageResponseBookResponse } from '../../../../services/models';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  bookResponse:PageResponseBookResponse={}
  constructor(private router:Router,
    private bookService : BookService
  ){}
   page=0;
   size=5;
  ngOnInit(): void {
this.findAllBooks();
console.log(this.findAllBooks);
  }
  findAllBooks() {
    this.bookService.findAllBooks({
      page:this.page,
      size:this.size
    }).subscribe({
      next:(books)=>{
this.bookResponse=books;
console.log(books);
      }
    })
  }

}
