import convert from 'convert-units'


export class Inventory {
    createStore?:boolean


    onCreateStore = async (values: any) => {
        console.log(values)

        const dataReply = await fetch(`http://localhost:8000/createStore`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        const dataParse = await dataReply.json()
        

    };

    onGetStores = async (values: any) => {
        console.log(values)

        const dataReply = await fetch(`http://localhost:8000/getStores`)
        const dataParse = await dataReply.json()
        return dataParse

    };

    onAddInventoryItems = async (values: any) => {
        values.store_id = parseInt(values.store_id)
        values.package_weight_grams = convert(values.package_weight).from(values.unit_of_measurement).to('g')
        const dataReply = await fetch(`http://localhost:8000/insertInventoryItems`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(values)
        })
        const dataParse = await dataReply.json()

    };


}





