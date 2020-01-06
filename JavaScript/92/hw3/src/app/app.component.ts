import { Component, ViewEncapsulation } from "@angular/core";
import { CatList } from "./shared/catlist";
import { Order } from "./shared/order";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"] // ,
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = "Welcome to Angular";

  catlist: CatList = {
    categories: [
      { title: "boboneitem", items: [{name:"bobitem",price: "999"}], isShow: false },
      { title: "bobtwoitems", items: [{name:"bobitem1",price: "999"},{name:"bobitem2",price: "998"}] , isShow: false },
      { title: "bobnoitems", isShow: false },
    ]
  };
}
