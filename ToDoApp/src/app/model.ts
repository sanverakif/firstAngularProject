export class Model {
    user;
    items;

    constructor() {
        this.user = "Çınar";
        this.items = [
            new ToDoItem("Spor", true),
            new ToDoItem("Kahvaltı", true),
            new ToDoItem("Kitap", false),
            new ToDoItem("Sinema", false)
        ];
    }
}

export class ToDoItem {
    _description;
    _action;

    constructor(description:any, action: any) {
        this._description = description;
        this._action = action;
    }
}