import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-news-analyzer',
  imports: [],
  template: `
    <p>news-analyzer works!</p>
    <span>some source url {{ some_uri }}</span>
  `,
  styles: ``,
})
export class NewsAnalyzerComponent {
  some_uri: string =
    environment.SIGEKRIA_API || 'http://127.0.0.01:8000/api/v0';
}
