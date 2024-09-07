import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    priceCounter(): number {
        let sumOfPrices: number = 0;
        for (let product of this._items) {
            sumOfPrices += product.price;
        }
        return sumOfPrices;
    }

    priceWithDiscountCounter(discount :number): number {
        let actualPrice: number = this.priceCounter();
        let actualPriceWithDiscount: number = (actualPrice * (100 - discount)) / 100;
        return actualPriceWithDiscount;
    }

    deleteProductWithId(id: number){
        for (let product of this._items) {
            if (product.id === id) {
                this._items.splice(this._items.indexOf(product), 1);
            } 
        }
    }
}