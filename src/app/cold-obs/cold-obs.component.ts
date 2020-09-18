import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cold-obs',
  templateUrl: './cold-obs.component.html',
  styleUrls: ['./cold-obs.component.css']
})
export class ColdObsComponent implements OnInit {

  constructor() { }

  private sub : Subscription;

  ngOnInit(): void {
    const observableObj = new Observable( observer => {
      let count : number = 0;

      setInterval(()=> {
        console.log("Inside obs ", count);
        observer.next(count);
        count++;
      }, 1000);

      setTimeout(() => {
        observer.complete();
      }, 4000)
    });

    //this.sub = observableObj.forEach(arg=> console.log ("inside subscription - ", arg));

    this.sub = observableObj.subscribe(arg => console.log("Inside subscribe ", arg));
  }

  
}
