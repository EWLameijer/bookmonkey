import { Component } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'bm-book-details',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css',
})
export class BookDetailsComponent {
  book$: Observable<Book>;

  constructor(
    route: ActivatedRoute,
    private bookService: BookStoreService,
    private router: Router,
  ) {
    const isbn = route.snapshot.paramMap.get('isbn')!;
    this.book$ = bookService.getByISBN(isbn);
  }

  removeBook(isbn: string) {
    if (confirm('Remove book?'))
      this.bookService
        .remove(isbn)
        .subscribe(() => this.router.navigateByUrl('/books'));
  }
}
