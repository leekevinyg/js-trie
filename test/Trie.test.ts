import { Trie } from '../dist/Trie';
import { expect } from 'chai';

describe('Prefix Trie', () => {
    it('should return true if a word exists in the trie, otherwise false', () => {
        let trie = new Trie();
        trie.insert("apple");
        expect(trie.search("apple")).to.be.true;
        expect(trie.search("ap")).to.be.false;
    });
    it('should return true if there exists a word in the trie that starts with a particular prefix, otherewise false', () => {
        let trie = new Trie();
        trie.insert("apple");
        expect(trie.search("apple")).to.be.true;
        expect(trie.startsWith("ap")).to.be.true;
        expect(trie.startsWith("p")).to.be.false;
    });
});