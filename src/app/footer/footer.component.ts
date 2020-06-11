import { Component, OnInit } from '@angular/core';
import { 
  faCoffee,
  faCode
 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faCoffee = faCoffee;
  faCode = faCode;

  constructor() { }

  ngOnInit(): void {
  }

}
