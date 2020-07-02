# JS Trie

A typescript implementation of the Prefix Trie data structure.

[![Build Status](https://travis-ci.com/leekevinyg/js-trie.svg?branch=master)](https://travis-ci.com/leekevinyg/js-trie)
[![Coverage Status](https://coveralls.io/repos/github/leekevinyg/js-trie/badge.svg?branch=master)](https://coveralls.io/github/leekevinyg/js-trie?branch=master)
[![npm version](https://badge.fury.io/js/js-trie.svg)](https://badge.fury.io/js/js-trie)
- <a href="#Installation">Installation</a>
- <a href="#Usage">Usage</a>
- <a href="#API">API</a>

<a name="Installation"></a>
# Installation

```npm i js-trie --save```

<a name="Usage"></a>
# Usage

```

const { Trie } = require('js-trie');

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

* **insert(word : string) : void**

Inserts a ```word``` into the prefix trie

* **search(word : string) : boolean**

Returns ```true``` if the ```word``` exists in the prefix trie, otherwise ```false```.

* **startsWith(prefix : string) : boolean**

Returns ```true``` if there exists a word that starts with ```part```, otherwise ```false```.
