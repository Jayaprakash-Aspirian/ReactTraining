"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const hapi_1 = require("@hapi/hapi");
console.log(routes_1.userRoutes);
const server = new hapi_1.Server({
    port: 3000,
    host: "localhost",
});
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    yield server.route(routes_1.userRoutes);
    yield server.start().then(() => {
        console.log("connected");
    });
});
init();
//# sourceMappingURL=index.js.map