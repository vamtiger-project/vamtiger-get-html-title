import {expect} from 'chai';
import * as XRegExp from 'xregexp';
import getHtmlTitle from '../../index';
import html from './mock-data';

describe("vamtiger-get-html-title: should return null for", function () {
    it("no title element", async function () {
        const expected = null;
        const htmlTitle = getHtmlTitle({ html });

        expect(htmlTitle).to.not.be.ok;
        expect(htmlTitle).to.equal(expected);
    })
});