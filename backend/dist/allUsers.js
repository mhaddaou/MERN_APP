"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function allUsers(users) {
    const ret = users.map(user => {
        const { _id, username, email } = user;
        return { _id, username, email };
    });
    return ret;
}
exports.default = allUsers;
