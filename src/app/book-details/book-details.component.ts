import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  book: Book = new Book();
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['ID'];
    this.bookService.getBookById(this.id).subscribe((data) => {
      this.book = data;
    });
  }

  onBack() {
    this.router.navigate(['/book']);
  }
}
