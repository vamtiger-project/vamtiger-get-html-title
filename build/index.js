"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XRegExp = require("xregexp");
const vamtiger_regex_html_title_1 = require("vamtiger-regex-html-title");
exports.default = (params) => {
    const html = params.html;
    const match = XRegExp.exec(html, vamtiger_regex_html_title_1.default);
    const title = match && match.title && match.title.trim();
    return title;
};
//# sourceMappingURL=index.js.map