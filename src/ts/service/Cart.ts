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
        return (this.priceCounter() * (100 - discount)) / 100;
    }

    deleteProductWithId(id: number){
        this._items = this._items.filter(product => product.id !== id);
    }
}