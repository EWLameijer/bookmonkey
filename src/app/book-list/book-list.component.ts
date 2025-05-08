import { Component } from '@angular/core';
import { Book } from '../shared/book';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';
import { BookStoreService } from '../shared/book-store.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'bm-book-list',
  imports: [BookListItemComponent, AsyncPipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  books$: Observable<Book[]>;

  constructor(bookStoreService: BookStoreService) {
    this.books$ = bookStoreService.getAll();
  }
}
