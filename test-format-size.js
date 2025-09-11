// Simple test script for formatSize function
// This is just for testing and can be deleted after verification

// Copy of the formatSize function for testing
function formatSize(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const value = bytes / Math.pow(k, i);
  
  return `${parseFloat(value.toFixed(decimals))} ${sizes[i]}`;
}

// Test cases
const testCases = [
  0,                  // 0 Bytes
  500,                // 500 Bytes
  1023,               // 1023 Bytes
  1024,               // 1 KB
  1500,               // 1.46 KB
  1024 * 1024,        // 1 MB
  1024 * 1024 * 2.5,  // 2.5 MB
  1024 * 1024 * 1024, // 1 GB
  1024 * 1024 * 1024 * 3.14159, // 3.14 GB
];

// Run tests
console.log("Testing formatSize function:");
testCases.forEach(bytes => {
  console.log(`${bytes} bytes = ${formatSize(bytes)}`);
});

// Test with different decimal places
console.log("\nTesting with different decimal places:");
const sampleBytes = 1024 * 1024 * 5.123456;
console.log(`${sampleBytes} bytes with 0 decimals = ${formatSize(sampleBytes, 0)}`);
console.log(`${sampleBytes} bytes with 1 decimal = ${formatSize(sampleBytes, 1)}`);
console.log(`${sampleBytes} bytes with 3 decimals = ${formatSize(sampleBytes, 3)}`);