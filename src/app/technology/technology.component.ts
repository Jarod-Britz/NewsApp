import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  articles: any;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.getTechnology()
    .subscribe(data => {
      this.articles = data['articles'];
    })
  }

}
