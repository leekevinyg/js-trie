interface ITrieNode {
    keys : { [key: string] : TrieNode };
    end : boolean;
}

interface ITrie {
    root : TrieNode;
    startsWith(prefix : string) : boolean;
    insert(word : string, node? : TrieNode) : void;
    search(word : string) : boolean;
}

class TrieNode implements ITrieNode {
    keys : { [key: string] : TrieNode };
    end : boolean;
    constructor() {
        this.keys = {};
        this.end = false;
    }
}

export default class Trie implements ITrie {
    root : TrieNode;
    constructor() {
        this.root = new TrieNode();
    }
    insert(word: string, node = this.root): void {
        if (word.length === 0) {
            node.end = true;
            return;
        } else if (node.keys[word[0]]) {
            return this.insert(word.substr(1), node.keys[word[0]]);
        } else {
            node.keys[word[0]] = new TrieNode();
            return this.insert(word.substr(1), node.keys[word[0]]);
        }
    }
    search(word: string): boolean {
        let node : TrieNode = this.root;
        while (word.length > 0) {
            let nextLetter : string = word[0];
            if (node.keys[nextLetter]) {
                node = node.keys[nextLetter];
                word = word.substr(1);
            } else {
                return false;
            }
        }
        return node.end;
    }
    startsWith(prefix: string): boolean {
        let node : TrieNode = this.root;
        while (prefix.length > 0) {
            let nextLetter : string = prefix[0];
            if (node.keys[nextLetter]) {
                node = node.keys[nextLetter];
                prefix = prefix.substr(1);
            } else {
                return false;
            }
        }
        return true;
    }
}

