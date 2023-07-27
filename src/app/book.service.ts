import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = 'http://localhost:8080/angular/books';
  constructor(private httpClient: HttpClient) {}

  getAllBook(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseUrl}`);
  }

  addBook(book: Book): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, book);
  }

  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseUrl}/${id}`);
  }

  updateBook(id: number, book: Book): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, book);
  }

  deleteBook(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
