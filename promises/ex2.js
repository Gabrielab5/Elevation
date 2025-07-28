function processFile(filename, processingTime) {
  return new Promise((resolve, reject) => {
    console.log(`Starting to process ${filename}...`);
    
    setTimeout(() => {
      // 15% chance of failure for realistic simulation
      if (Math.random() < 0.15) {
        reject(new Error(`Failed to process ${filename}`));
      } else {
        const result = {
          filename: filename,
          size: Math.floor(Math.random() * 1000) + 100, // Random size
          processedAt: new Date().toLocaleTimeString()
        };
        console.log(`✓ Completed ${filename}`);
        resolve(result);
      }
    }, processingTime);
  });
}

// TODO: Use Promise.all() to process these files concurrently:
const files = [
  { name: "document1.pdf", time: 2000 },
  { name: "image1.jpg", time: 1500 },
  { name: "data.csv", time: 3000 },
  { name: "report.docx", time: 1000 }
];

// TODO: 
// 1. Create an array of promises using the files array
const filePromises = files.map(file => processFile(file.name, file.time));
const startTime = Date.now();
// 2. Use Promise.all() to wait for all files to complete
Promise.all(filePromises)
.then(results => {
// 3. Log total processing time and all results 
const totalProcessingTime = Date.now() - startTime;
console.log("\nAll Files Processed Successfully!");
console.log(`Total concurrent processing time: ${totalProcessingTime}ms`);
console.log("Results:");
results.forEach(result => console.log(result));   
})
.catch(error => {
// 4. Handle the case where any file fails   
    const totalProcessingTime = Date.now - startTime
    console.error("\nOne or more files failed. ")
    console.error(`Error after ${totalProcessingTime}ms: ${error.message}`)
})

// Bonus: Try Promise.allSettled() to see results even if some files fail

Promise.allSettled(filePromises)
  .then(results => {
    const totalProcessingTime = Date.now() - startTime;
    console.log("\n--- All File Processes Settled ---");
    console.log(`Total concurrent processing time: ${totalProcessingTime}ms`);
    console.log("Individual File Outcomes:");

    results.forEach((outcome, index) => {
      const originalFilename = files[index].name; // Get the original filename for context
      if (outcome.status === 'fulfilled') console.log(`  [SUCCESS] ${originalFilename}:`, outcome.value);
       else console.error(`  [FAILED] ${originalFilename}: ${outcome.reason.message}`);
    });

    const successfulFiles = results.filter(outcome => outcome.status === 'fulfilled');
    const failedFiles = results.filter(outcome => outcome.status === 'rejected');

    console.log(`\nSummary: ${successfulFiles.length} files succeeded, ${failedFiles.length} files failed.`);
  });