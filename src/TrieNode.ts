interface ITrieNode {
    keys : { [key: string] : TrieNode };
    end : boolean;
}

export class TrieNode implements ITrieNode {
    keys : { [key: string] : TrieNode };
    end : boolean;
    constructor() {
        this.keys = {};
        this.end = false;
    }
}