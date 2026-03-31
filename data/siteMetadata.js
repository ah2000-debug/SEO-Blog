/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'KI-VO-Check',
  author: 'Aegira',
  headerTitle: 'KI-VO-Check',
  description:
    'Daily insights on AI governance, EU AI Act compliance, and responsible AI adoption for European businesses — by Aegira.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://ki-vo-check.de',
  siteRepo: 'https://github.com/YOUR-USERNAME/YOUR-REPO-NAME', // TODO: update with your actual repo URL
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  // mastodon: '',
  email: 'info@aegira.ai', // TODO: update with your preferred contact email
  // github: '',
  // x: '',
  // facebook: '',
  // youtube: '',
  linkedin: 'https://www.linkedin.com/company/aegira', // TODO: update if Aegira has a company LinkedIn page
  // threads: '',
  // instagram: '',
  // medium: '',
  // bluesky: '',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: true,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    // umamiAnalytics: {
    //   umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    // },
    // plausibleAnalytics: {
    //   plausibleDataDomain: 'ki-vo-check.de',
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  // newsletter: {
  //   // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
  //   // Please add your .env file and modify it according to your selection
  //   provider: 'buttondown',
  // },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
  },
}

module.exports = siteMetadata
