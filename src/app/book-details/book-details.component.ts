import { Component } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-details',
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css',
})
export class BookDetailsComponent {
  book?: Book;

  constructor(route: ActivatedRoute, bookService: BookStoreService) {
    const isbn = route.snapshot.paramMap.get('isbn');
    this.book = isbn ? bookService.getByISBN(isbn) : undefined;
  }
}
