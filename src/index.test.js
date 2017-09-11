import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function (etrr, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Seni Çok Seviyorum");
      done();
      window.close();
    });
  });
});
