import {expect} from 'chai';
import * as XRegExp from 'xregexp';
import getHtmlTitle from '../../index';
import html from './mock-data';

describe("vamtiger-get-html-title: should get the title", function () {
    it("HTML", async function () {
        const expected = 'Some HTML Title';
        const htmlTitle = getHtmlTitle({ html });

        expect(htmlTitle).to.be.ok;
        expect(htmlTitle).to.equal(expected);
    })
});