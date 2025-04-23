
# Auto Blog Bot

A fully automated, AI-powered blogging system that generates SEO-optimized posts, publishes them daily, and monetizes through Amazon Affiliate links and Google AdSense—completely hands-off.

## Features

- Daily AI-generated blog content (Markdown)
- Automatically publishes to a static site (Astro + Vercel)
- Monetized with Amazon Affiliate links (placeholder included)
- Google AdSense integration (placeholder included)
- Dead link checker for maintenance
- Runs entirely via GitHub Actions (no manual input required)

## Setup Instructions

### 1. Clone or Fork This Repository
Use the GitHub app or browser to fork this repo to your account.

### 2. Set Your OpenAI API Key
Go to:
- `Repo Settings` → `Secrets and Variables` → `Actions`
- Add a new secret:
  - **Name**: `OPENAI_API_KEY`
  - **Value**: your OpenAI key from https://platform.openai.com

### 3. Deploy the Site to Vercel
1. Go to [https://vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Import this repository
4. Select the `/astro-blog` folder as the project root
5. Deploy

Your site will auto-update whenever a new blog post is generated.

## Customization

- **Post topics**: Edit the `keywords` array in `contentGenerator.js`
- **Affiliate links**: Replace placeholders with your own Amazon tag
- **AdSense code**: Insert your publisher ID in the site layout

## License

This project is licensed under the MIT License.
See the [LICENSE](LICENSE) file for details.
