import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newArticle: Article = {
    title: '',
    quantity: 0,
    date: new Date(),
    email: '',
  };
  articleList: Article[] = [];

  onSubmit(): void {
    console.log('envoyé');
    console.log(this.newArticle);
    this.articleList.push({ ...this.newArticle });
    console.log(this.articleList);
  }
}
