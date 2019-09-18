import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  articles: any;

  constructor(private articlesService:ArticlesService) { }

  ngOnInit() {
    this.articlesService.getHealth()
    .subscribe(data => {
      this.articles = data['articles'];
      console.log(this.articles);
      
    })
  }

}
