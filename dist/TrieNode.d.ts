interface ITrieNode {
    keys: {
        [key: string]: TrieNode;
    };
    end: boolean;
}
export declare class TrieNode implements ITrieNode {
    keys: {
        [key: string]: TrieNode;
    };
    end: boolean;
    constructor();
}
export {};
