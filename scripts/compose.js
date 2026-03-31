const fs = require('fs')
const path = require('path')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve))
}

async function main() {
  const title = await ask('Post title: ')
  if (!title) {
    console.log('Title is required.')
    rl.close()
    return
  }

  const tags = await ask('Tags (comma-separated, e.g. eu-ai-act, compliance): ')
  const summary = await ask('Summary (one line): ')
  const author = await ask('Author [default]: ')

  const date = new Date().toISOString().split('T')[0]
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  const frontMatter = `---
title: '${title.replace(/'/g, "\\'")}'
date: '${date}'
tags: [${tags ? tags.split(',').map((t) => `'${t.trim()}'`).join(', ') : ''}]
draft: false
summary: '${(summary || '').replace(/'/g, "\\'")}'
authors: ['${author || 'default'}']
---

`

  const dir = path.join(process.cwd(), 'data', 'blog')
  const filePath = path.join(dir, `${slug}.mdx`)

  if (fs.existsSync(filePath)) {
    console.log(`File already exists: ${filePath}`)
    rl.close()
    return
  }

  fs.writeFileSync(filePath, frontMatter)
  console.log(`\nCreated: ${filePath}`)
  console.log(`Open it and start writing below the --- line.`)
  rl.close()
}

main()
