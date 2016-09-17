var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name, color) {
        _super.call(this, name);
        this.html = "<ul><li class=\'li\'></li>";
        this.color = color;
    }
    return Cat;
}(Animal));
//# sourceMappingURL=app.js.map