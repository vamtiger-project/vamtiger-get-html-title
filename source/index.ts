import * as XRegExp from 'xregexp';
import {default as regex, Match} from 'vamtiger-regex-html-title';
import { Params } from './types';

export default (params: Params) => {
    const html = params.html;
    const match = XRegExp.exec(html, regex) as Match;
    const title = match && match.title && match.title.trim();

    return title;
}