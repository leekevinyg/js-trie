interface ITrieNode {
    keys : TrieNode[];
    end : boolean;
}

export class TrieNode implements ITrieNode {
    keys : TrieNode[];
    end : boolean;
    constructor() {
        this.keys = [];
        this.end = false;
    }
}