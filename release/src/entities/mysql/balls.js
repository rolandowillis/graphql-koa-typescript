"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var baseEntity_1 = require("./baseEntity");
var Balls = /** @class */ (function (_super) {
    __extends(Balls, _super);
    function Balls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Balls.prototype, "issue", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Balls.prototype, "red1", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Balls.prototype, "red2", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Balls.prototype, "red3", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Balls.prototype, "red4", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Balls.prototype, "red5", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Balls.prototype, "red6", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Balls.prototype, "blue", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Balls.prototype, "happySun", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Balls.prototype, "pool", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Balls.prototype, "prizeOne", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Balls.prototype, "prizeOneNum", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Balls.prototype, "prizeTwo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Balls.prototype, "prizeTwoNum", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Balls.prototype, "bettingNum", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Balls.prototype, "drawDate", void 0);
    Balls = __decorate([
        typeorm_1.Entity('doubleColorBall')
    ], Balls);
    return Balls;
}(baseEntity_1.BaseEntity));
exports.Balls = Balls;
//# sourceMappingURL=balls.js.map