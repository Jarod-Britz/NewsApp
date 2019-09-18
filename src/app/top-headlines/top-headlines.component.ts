import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.css']
})
export class TopHeadlinesComponent implements OnInit {
  articles: any;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.getTopHeadlines()
    .subscribe(data => {
      this.articles = data['articles'];
      
    })
    
  }

}
