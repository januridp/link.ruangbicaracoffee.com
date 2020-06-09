import { Component } from '@angular/core';
import { 
  faCoffee,
  faMapMarked,
  faCode,
  faGlobe
 } from '@fortawesome/free-solid-svg-icons';
import { 
  faInstagram,
  faFacebook,
  faYoutube,
  faGoogle,
  faFacebookSquare
 } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faCoffee = faCoffee;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faMap = faMapMarked;
  faCode = faCode;
  faGoogle = faGoogle;
  faFacebookSquare = faFacebookSquare;
  faGlobe = faGlobe;
  title = 'Ruang Bicara Coffee';
}
