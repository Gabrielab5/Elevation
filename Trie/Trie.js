const readline = require("readline")
const AutoCompleteTrie = require('./AutoCompleteTrie')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "> "
})

const trie = new AutoCompleteTrie()

console.log("=== AutoComplete Trie Console ===")
console.log("Type 'help' for commands")
rl.prompt()

rl.on("line", (line) => {
    const [command, ...args] = line.trim().split(" ")
    const input = args.join(" ").trim()

    switch (command) {
        case "add":
            if (input) {
                trie.addWord(input);
                console.log(`✓ Added '${input}' to dictionary`)
            } else {
                console.log("✗ Please provide a word to add.")
            }
            break

        case "find":
            if (input) {
                const found = trie.findWord(input);
                console.log(found
                    ? `✓ '${input}' exists in dictionary`
                    : `✗ '${input}' not found in dictionary`)
            } else {
                console.log("✗ Please provide a word to search.")
            }
            break

        case "complete":
            if (input) {
                const suggestions = trie.predictWords(input)
                if (suggestions.length > 0) {
                    console.log(`Suggestions for '${input}': ${suggestions.join(", ")}`)
                } else {
                    console.log(`✗ No suggestions found for '${input}'`)
                }
            } else {
                console.log("✗ Please provide a prefix.")
            }
            break

        case "help":
            console.log(`Commands:
                        add <word>        - Add word to dictionary
                        find <word>       - Check if word exists
                        complete <prefix> - Get completions
                        help              - Show this message
                        exit              - Quit program`);
            break

        case "exit":
            console.log("Goodbye!")
            rl.close()
            return

        default:
            console.log("✗ Unknown command. Type 'help' for a list of commands.")
    }

    rl.prompt()
});