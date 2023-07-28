import convert from 'convert-units'
import * as React from 'react'

export class Inventory {
    createStore: boolean
    inventory: any




    constructor(createStore?, inventory?) {
        this.createStore = true;
        this.inventory = null;

    }




    getInventoryItems = async () => {
        const dataReply = await fetch(`http://localhost:8080/getInventoryItems`);
        const newData = await dataReply.json();
        this.inventory = newData;
        return this;
    };

    getInventoryChecklist = async () =>{
        const dataReply = await fetch(`http://localhost:8080/getInventoryItemsForDailyChecklist`);
        const newData = await dataReply.json();
        this.inventory = newData;
        return this;    }
}




