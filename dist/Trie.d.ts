import { TrieNode } from './TrieNode';
interface ITrie {
    root: TrieNode;
    startsWith(prefix: string): boolean;
    insert(word: string, node?: TrieNode): void;
    search(word: string): boolean;
}
export default class Trie implements ITrie {
    root: TrieNode;
    constructor();
    insert(word: string, node?: TrieNode): void;
    search(word: string): boolean;
    startsWith(prefix: string): boolean;
}
export {};
