import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'bm-home',
  imports: [RouterLink, SearchComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
