class AutoCompleteTrie {
    constructor(value = null) {
        this.value = value;
        this.children = {};
        this.endOfWord = false;
    }

    addWord(word) {
        let current = this;
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new AutoCompleteTrie(char);
            }
            current = current.children[char];
        }
        current.endOfWord = true;
    }

    findWord(word) {
        let current = this;
        for (let char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return current.endOfWord;
    }

    predictWords(prefix) {
        let startNode = this._getRemainingTree(prefix);
        if (!startNode) return [];
        let results = [];
        this._allWordsHelper(prefix, startNode, results);
        return results;
    }

    _getRemainingTree(prefix) {
        let current = this;
        for (let char of prefix) {
            if (!current.children[char]) {
                return null;
            }
            current = current.children[char];
        }
        return current;
    }

    _allWordsHelper(currentWord, node, words) {
        if (node.endOfWord) {
            words.push(currentWord);
        }

        for (let char in node.children) {
            this._allWordsHelper(currentWord + char, node.children[char], words);
        }
    }
}

export default AutoCompleteTrie;