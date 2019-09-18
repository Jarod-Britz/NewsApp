import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
  articles: any;

  constructor(private articlesService:ArticlesService) { }

  ngOnInit() {
    this.articlesService.getSport()
    .subscribe(data => {
      this.articles = data['articles'];
    })
  }

}
