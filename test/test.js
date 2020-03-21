/*
 * This file is used to test.
 */
const assert = require('assert');

const md5 = require('../md5');

// Instance object for testing
const example = {
    name: 'xn-02f',
    email: 'i@huiyifyj.cn',
    url: 'xn--02f.com',
    chinese: '中文',
    uriReserved: ';/?:@&=+$,'
}

// Related MD5 hash value
const md5Hash = {
    name: '54d30fa674d13e3598970bc9c5e2388e',
    email: '11b334f003ef029c9d154f5dbae18b44',
    url: '014dab5b5a990d379b2306f5d0839261',
    chinese: 'a7bac2239fcdcb3a067903d8077c4a07',
    uriReserved: 'cae1061daebd7e3700817d67a2727fc2'
}

describe('MD5 Test', () => {
    it('"' + example.name + '" Converted to MD5 Value Test.', () => {
        assert.equal(md5(example.name), md5Hash.name);
    });

    it('"' + example.email + '" Converted to MD5 Value Test.', () => {
        assert.equal(md5(example.email), md5Hash.email);
    });

    it('"' + example.url + '" Converted to MD5 Value Test.', () => {
        assert.equal(md5(example.url), md5Hash.url);
    });
});

describe('Special Strings Test', () => {
    it('Test reserved characters of URI: "' + example.uriReserved + '".', () => {
        assert.equal(md5(example.uriReserved), md5Hash.uriReserved);
    });

    it('Test chinese string "' + example.chinese + '".', () => {
        assert.equal(md5(example.chinese), md5Hash.chinese);
    });
});
