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
        const dataReply = await fetch(`noted-lead-340306.ue.r.appspot.com /getInventoryItems`);
        const newData = await dataReply.json();
        this.inventory = newData;
        return this;
    };

    getInventoryChecklist = async () =>{
        const dataReply = await fetch(`noted-lead-340306.ue.r.appspot.com /getInventoryItemsForDailyChecklist`);
        const newData = await dataReply.json();
        this.inventory = newData;
        return this;    }
}




