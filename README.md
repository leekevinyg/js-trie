# JS Trie

A javascript implementation of a the Prefix Trie data structure.

[![Build Status](https://travis-ci.com/leekevinyg/js-priority-queue.svg?branch=master)](https://travis-ci.com/leekevinyg/js-priority-queue)
[![Coverage Status](https://coveralls.io/repos/github/leekevinyg/js-priority-queue/badge.svg)](https://coveralls.io/github/leekevinyg/js-priority-queue)
[![npm version](https://badge.fury.io/js/vanilla-priority-queue.svg)](https://badge.fury.io/js/vanilla-priority-queue)

- <a href="#Installation">Installation</a>
- <a href="#Usage">Usage</a>
- <a href="#API">API</a>

<a name="Installation"></a>
# Installation

```npm i js-trie --save```

<a name="Usage"></a>
# Usage

```

const {  Trie  } = require('js-trie');

let trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true

```

<a name="API"></a>
# API

The library exposes the following functions:

* **insert(word : string)**
Inserts an word into the prefix trie

* **search(word : string) : boolean**
Returns true if the ```word``` exists in the prefix trie, otherwise false.

* **startsWith(part : string) : boolean**
Returns true if there exists a word that starts with ```part```, otherwise false.
