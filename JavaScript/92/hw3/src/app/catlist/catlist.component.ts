import { Component, Input } from '@angular/core';
import { CatList } from '../shared/catlist';

@Component({
  selector: 'app-catlist',
  templateUrl: './catlist.component.html',
  styleUrls: ['./catlist.component.css']
})
export class CatlistComponent  {
 
  

  @Input()
  catlist: CatList;
   
 toggleDisplay(index: number) {
   let show = this.catlist.categories[index].isShow
  this.catlist.categories[index].isShow = !show;
  }
 
  constructor() { 

  }

  ngOnInit() {
  }

}
