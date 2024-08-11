import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { BookResponse } from '../../../../services/models';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {

  private _book:BookResponse={}
  private _bookCover:string|undefined;
  private _manage=false;



  get book(): BookResponse {
    return this._book;
  }

  @Input()
  set book(value: BookResponse) {
    this._book = value;
  }
  get bookCover():string|undefined{
    if(this._book.cover){
     return 'data:image/jpeg;base64, '+this._book.cover ;
     }
    return 'data:image/jpeg;base64,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';
  }
  get manage(): boolean {
    return this._manage;
  }

  @Input()
  set manage(value: boolean) {
    this._manage = value;
  }
  @Output() private share:EventEmitter<BookResponse>=new EventEmitter<BookResponse>();
  @Output() private archive:EventEmitter<BookResponse>=new EventEmitter<BookResponse>();
  @Output() private addToWaitingList: EventEmitter<BookResponse> = new EventEmitter<BookResponse>();
  @Output() private borrow: EventEmitter<BookResponse> = new EventEmitter<BookResponse>();
  @Output() private edit: EventEmitter<BookResponse> = new EventEmitter<BookResponse>();
  @Output() private details: EventEmitter<BookResponse> = new EventEmitter<BookResponse>();




  onShare() {
    this.share.emit(this._book);
  }

  onArchive() {
    this.archive.emit(this._book);
  }

  onAddToWaitingList() {
    this.addToWaitingList.emit(this._book);
  }

  onBorrow() {
    this.borrow.emit(this._book);
  }

  onEdit() {
    this.edit.emit(this._book);
  }

  onShowDetails() {
    this.details.emit(this._book);
  }
}
