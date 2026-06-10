import fs from 'fs';
import path from 'path';
import TurndownService from 'turndown';

const blogDir = './src/pages/blog';
const outputDir = './public/blog-md';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.astro') && file !== 'index.astro');

const turndownService = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced'
});

for (const file of files) {
    const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
    
    const titleMatch = content.match(/<Layout\s+title="(.*?)"/);
    const descMatch = content.match(/description="(.*?)"/);
    
    const title = titleMatch ? titleMatch[1] : '';
    const description = descMatch ? descMatch[1] : '';
    
    const articleMatch = content.match(/<article[^>]*>([\s\S]*?)<\/article>/);
    let htmlContent = articleMatch ? articleMatch[1] : '';
    
    // Remove material icons text which looks weird in MD
    htmlContent = htmlContent.replace(/<span class="material-icons[^>]*>.*?<\/span>/g, '');
    
    let mdContent = turndownService.turndown(htmlContent);
    
    let finalMd = `---
title: "${title}"
description: "${description}"
---

# ${title}

${mdContent}
`;

    const mdFilename = file.replace('.astro', '.md');
    fs.writeFileSync(path.join(outputDir, mdFilename), finalMd);
    console.log(`Generated ${mdFilename}`);
}

console.log(`Generated ${files.length} markdown files in ${outputDir}`);
