import { Component } from '@angular/core';
import {initializeApp,database} from 'firebase';
import { config } from './../environments/firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
        initializeApp(config);
  }
}
