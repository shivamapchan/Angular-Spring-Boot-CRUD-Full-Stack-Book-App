import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import {
  faTrashCan,
  faPenToSquare,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  faTrash = faTrashCan;
  faEdit = faPenToSquare;
  faBook = faBook;

  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  private getBook() {
    this.bookService.getAllBook().subscribe((data) => {
      this.books = data;
    });
  }
  ngOnInit(): void {
    this.getBook();
  }

  routeToUpdateBook(id: number) {
    this.router.navigate(['update-book', id]);
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe((data) => {
      this.getBook();
    });
  }

  routeToviewBookDetails(id: number) {
    this.router.navigate(['/book-details', id]);
  }
}
