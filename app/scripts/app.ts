

class Animal {
    name: string;

    constructor (name) {
         this.name = name;
    }
}

class Cat extends Animal {
    color: string;

    constructor(name, color) {
        super(name);
        this.color = color;
    }

    html: string = "<ul><li class=\'li\'></li>";
}