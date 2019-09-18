import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-toptech',
  templateUrl: './toptech.component.html',
  styleUrls: ['./toptech.component.css']
})
export class ToptechComponent implements OnInit {
  articles: any;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.getTopTechnology()
    .subscribe(data => {
      this.articles = data['articles'];
    })
  }

}
