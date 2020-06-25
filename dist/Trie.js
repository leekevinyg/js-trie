"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trie = void 0;
const TrieNode_1 = require("./TrieNode");
class Trie {
    constructor() {
        this.root = new TrieNode_1.TrieNode();
    }
    insert(word, node = this.root) {
        if (word.length === 0) {
            node.end = true;
            return;
        }
        else if (node.keys[word[0]]) {
            return this.insert(word.substr(1), node.keys[word[0]]);
        }
        else {
            node.keys[word[0]] = new TrieNode_1.TrieNode();
            return this.insert(word.substr(1), node.keys[word[0]]);
        }
    }
    search(word) {
        let node = this.root;
        while (word.length > 0) {
            let nextLetter = word[0];
            if (node.keys[nextLetter]) {
                node = node.keys[nextLetter];
                word = word.substr(1);
            }
            else {
                return false;
            }
        }
        return node.end;
    }
    startsWith(prefix) {
        let node = this.root;
        while (prefix.length > 0) {
            let nextLetter = prefix[0];
            if (node.keys[nextLetter]) {
                node = node.keys[nextLetter];
                prefix = prefix.substr(1);
            }
            else {
                return false;
            }
        }
        return true;
    }
}
exports.Trie = Trie;
