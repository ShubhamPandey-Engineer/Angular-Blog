import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-blog',
  templateUrl: './search-blog.component.html',
  styleUrls: ['./search-blog.component.css']
})
export class SearchBlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() parentData:string=""

//page reload
reloadPage()
{
  document.location.reload()
}

}
