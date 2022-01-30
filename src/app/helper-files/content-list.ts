import {Content} from "./content-interface";

export class ContentList {
    private _items : Content[];

    constructor () {
        this._items = [];
    }

    addItem (item : Content) {
        this._items.push(item);
    }

    returnCount () {
        return this._items.length;
    }

    returnContent (index : number) {
        if (index >= this._items.length) {
          return `<p class="error">ERROR: Index outside the range of array.</p>`
        }

        //id, title, description, creator, imageURL, type, tags
        let item = this._items[index];
        let output = `<div class="album">`;
        if (item.imgURL) { output += `<img src="${item.imgURL}" />`; }
        output += `
            <h2>${item.title}</h2>
            <p><strong>Creator:</strong> ${item.creator}</p>
            <p><strong>Description:</strong> ${item.description}</p>
        `;
        if (item.type) { output += `<p>Type: ${item.type}</p>`; }
        //if (item.tags) { output += `<p>Tags: ${item.tags.join(", ")}`; }
        output += `</div>`;

        return output;
    }

    get items () : Content[] {
        return this._items;
    }
}
