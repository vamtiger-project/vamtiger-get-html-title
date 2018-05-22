import {expect} from 'chai';
import * as XRegExp from 'xregexp';
import getHtmlTitle from '../../index';
import html from './mock-data';

describe("vamtiger-get-html-title: should get an empty string when", function () {
    it("title element is empty", async function () {
        const expected = '';
        const htmlTitle = getHtmlTitle({ html });

        expect(htmlTitle).to.not.be.ok;
        expect(htmlTitle).to.equal(expected);
    })
});