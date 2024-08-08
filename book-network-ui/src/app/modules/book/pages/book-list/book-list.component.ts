import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../../services/services';
import { BookResponse, PageResponseBookResponse } from '../../../../services/models';
import { BookCardComponent } from "../../components/book-card/book-card.component";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookCardComponent],
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
   pages: any = [];
   message = '';
   level: 'success' |'error' = 'success';
  ngOnInit(): void {
this.findAllBooks();
console.log(this.findAllBooks);
console.log(this.bookResponse.totalPages);


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
  gotToPage(page: number) {
    this.page = page;
    this.findAllBooks();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllBooks();
  }

  goToPreviousPage() {
    this.page --;
    this.findAllBooks();
  }

  goToLastPage() {
    this.page = this.bookResponse.totalPages as number - 1;
    this.findAllBooks();
  }

  goToNextPage() {
    this.page++;
    this.findAllBooks();
  }



    get isLastPage() {
      return this.page === this.bookResponse.totalPages as number - 1;
    }

}
