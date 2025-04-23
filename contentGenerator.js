
// contentGenerator.js
// Generates blog posts using OpenAI API and saves to /posts

const fs = require('fs');
const path = require('path');
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const keywords = ['AI for business', 'passive income ideas', 'tech automation'];

async function generatePost(topic) {
  const prompt = `Write an SEO-optimized blog post about: ${topic}`;
  const response = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
  });

  const content = response.data.choices[0].message.content;
  const date = new Date().toISOString().split('T')[0];
  const fileName = `${date}-${topic.replace(/\s+/g, '-').toLowerCase()}.md`;

  fs.writeFileSync(path.join(__dirname, 'posts', fileName), content);
  console.log(`Post generated: ${fileName}`);
}

async function main() {
  const topic = keywords[Math.floor(Math.random() * keywords.length)];
  await generatePost(topic);
}

main();
