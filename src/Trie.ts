import { TrieNode } from './TrieNode';

interface ITrie {
    root : TrieNode;
    startsWith(prefix : string) : boolean;
    insert(word : string) : void;
    search(word : string) : boolean;
}

export class Trie implements ITrie {
    root : TrieNode;
    constructor() {
        this.root = new TrieNode();
    }
    insert(word: string): void {
        throw new Error("Method not implemented.");
    }
    startsWith(prefix: string): boolean {
        throw new Error("Method not implemented.");
    }
    search(word: string): boolean {
        throw new Error("Method not implemented.");
    }
}

