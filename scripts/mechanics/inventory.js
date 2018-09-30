class Inventory {
    constructor(){
        this.items = new Map();
        this.slots = 0;
        const maxSlots = 10;
    }

    addItem(name, item) {
        if(!hasItem(name)) {
            this.slots++;
            this.items.set(name, item);
        }
        else {
            console.log("An item with given name already exists in player's inventory!");
        }
    }

    removeItem(name) {
        if(hasItem(name)) {
            this.items.delete(name);
            this.slots--;
        }
        else {
            console.log("An item with given name does not exist in player's inventory!");
        }
    }

    useItem(name) {

    }

    hasItem(name) {
        return (this.items.has(name)) ? true : false;
    }

}
