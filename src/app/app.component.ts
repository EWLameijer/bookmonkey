import { Component } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { Book } from './shared/book';
import { BookDetailsComponent } from './book-details/book-details.component';

@Component({
  selector: 'bm-root',
  imports: [BookListComponent, BookDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  book: Book | null = null;

  showList() {
    this.book = null;
  }

  showDetails(book: Book) {
    this.book = book;
  }
}
