"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const controller_1 = require("./controller/controller");
exports.userRoutes = [
    {
        method: "GET",
        path: "/",
        handler: controller_1.getUsersdata,
    },
    {
        method: "POST",
        path: "/adduser",
        handler: controller_1.addUserdata,
    },
    {
        method: "PUT",
        path: "/updateuser",
        handler: controller_1.updateUserdata,
    },
    {
        method: "DELETE",
        path: "/deleteuser",
        handler: controller_1.deleteUserdata,
    },
    {
        method: "*",
        path: "/{any*}",
        handler: controller_1.pageNotfound,
    },
];
//# sourceMappingURL=routes.js.map