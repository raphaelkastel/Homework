(function () {
    'use strict';


    class items {

        constructor(name, quantity, price) {
            this.name = name;
            this.quantity = quantity;
            this.price = price / quantity;
        }

    }

    class orders {

        constructor(cname, cadd, item) {
            this.cname = cname;
            this.cadd = cadd;
            this.item = item;
            item.forEach(element => {
                if (element.total) {
                    const nitem = new items(element.item, element.quantity, element.total);
                } else {
                    const nitem = new items(element.item, element.quantity, element.price);
                }
            });
        }
        get total() {
            let total = 0;
            this.item.forEach(element => {
                if (element.total) {
                    total += element.total;
                } else {
                    total += element.price;
                }
            });
            return total;
        }
    }
    fetch("quiz.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(rt => {
            for (let i = 0; i < rt.length; i++) {
                const elem = Object.values(rt[i]);

                let obj = new orders(elem[0], elem[1], elem[2]);
                console.log(obj);
                console.log(obj.total);
            }

        });

}());