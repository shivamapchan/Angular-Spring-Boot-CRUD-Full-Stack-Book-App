import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
  book: Book = new Book();
  id!: number;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Variable 'ID' coming from app-routing.module.ts
    this.id = this.route.snapshot.params['ID'];
    this.bookService.getBookById(this.id).subscribe(
      (data) => {
        this.book = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.bookService.updateBook(this.id, this.book).subscribe(
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

  cancelForm() {
    this.redirectToBookList();
  }
}
