import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  articles: any;

  constructor(private articlesService:ArticlesService) { }

  ngOnInit() {
    this.articlesService.getEntertainment()
    .subscribe(data => {
      this.articles = data['articles'];
      console.log(this.articles);
    })
  }

}
