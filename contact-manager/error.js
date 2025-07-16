function safeJsonParse(json){
    try{
        return JSON.parse(json);
    }catch (error) {
        return "Invalid JSON format"
    }
}

console.log(safeJsonParse('{"name": "John"}')); 
// Output: { name: "John" }

console.log(safeJsonParse('invalid json')); 
// Output: "Invalid JSON format"


// ex2 //


readFileWithErrorHandling('existing.txt', (result) => {
    fs.readFile(filePath, (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return callback(`File not found: ${filePath}`);
      }
      if (err.code === 'EISDIR') {
        return callback(`Path is a directory: ${filePath}`);
      }
      return callback(`Error reading file: ${err.message}`);
    }
})
})
 
