const fs = require('fs');
const path = require('path');

console.log('🔍 Finding all guide pages with noindex...\n');

// Recursively find all page.tsx files
function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findPageFiles(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  });

  return fileList;
}

const guiasDir = path.join(__dirname, '..', 'app', 'guias');
const files = findPageFiles(guiasDir);

console.log(`Found ${files.length} guide pages to process\n`);

let processedCount = 0;
let changedCount = 0;

files.forEach((filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');

  // Check if file has index: false
  if (content.includes('index: false')) {
    // Replace the entire robots block including comments
    let newContent = content.replace(
      /robots:\s*\{\s*index:\s*false,\s*\/\/[^\n]*\n\s*follow:\s*true,\s*\}/g,
      'robots: {\n    index: true,\n    follow: true,\n  }'
    );

    // Also handle without comment
    newContent = newContent.replace(
      /robots:\s*\{\s*index:\s*false,\s*follow:\s*true,?\s*\}/g,
      'robots: {\n    index: true,\n    follow: true,\n  }'
    );

    // Handle single line variations
    newContent = newContent.replace(
      /robots:\s*\{\s*index:\s*false,?\s*\}/g,
      'robots: {\n    index: true,\n    follow: true,\n  }'
    );

    // Write back only if changed
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      changedCount++;
      const relativePath = path.relative(path.join(__dirname, '..'), filePath);
      console.log(`✅ Updated: ${relativePath}`);
    }
  }

  processedCount++;
});

console.log(`\n✅ COMPLETE: Processed ${processedCount} files, changed ${changedCount} files`);
console.log('All guide pages are now indexable!\n');
