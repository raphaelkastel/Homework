import { Component, Input } from '@angular/core';
import { Catagory } from '../shared/catagory';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent  {
  @Input()
  catagory: Catagory;

    
 toggleDisplay(index: number) {
  let show = this.catagory.isShow
 this.catagory.isShow = !show;
 }
  constructor() { }

  ngOnInit() {
  }

}
