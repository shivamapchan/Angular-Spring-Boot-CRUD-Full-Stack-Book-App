import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  book: Book = new Book();

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {}

  saveBook() {
    this.bookService.addBook(this.book).subscribe(
      (data) => {
        console.log(data);
        this.redirectToBookList();
      },
      (error) => console.log(error)
    );
  }

  redirectToBookList() {
    this.router.navigate(['/book']);
  }

  onSubmit() {
    this.saveBook();
  }

  cancelForm() {
    this.redirectToBookList();
  }
}
