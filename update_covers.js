const fs = require('fs');

async function fetchCovers() {
  const content = fs.readFileSync('src/lib/content.ts', 'utf8');
  const trackIds = [...content.matchAll(/id:\s*"([^"]+)"/g)].map(m => m[1]);
  let newContent = content;
  
  for (const id of trackIds) {
    try {
      const res = await fetch(`https://open.spotify.com/oembed?url=spotify:track:${id}`);
      const data = await res.json();
      console.log(id, data.title);
      
      // if title doesn't exist, add it
      if (!newContent.includes(`title: "${data.title}"`)) {
        newContent = newContent.replace(
          new RegExp(`id:\\s*"${id}",`),
          `id: "${id}",\n    title: "${data.title}",`
        );
      }
    } catch (e) {
      console.error('Failed', id);
    }
  }
  
  if (!newContent.includes('title?: string;')) {
    newContent = newContent.replace(
      'streams: string;',
      'streams: string;\n  title?: string;'
    );
  }
  
  fs.writeFileSync('src/lib/content.ts', newContent);
  console.log('Updated src/lib/content.ts with titles');
}

fetchCovers();
