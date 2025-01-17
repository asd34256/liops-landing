import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'b08f75f44e024fdf8421af20663b7851',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'LiOps',
  domain: 'liops.io',
  author: 'LiOps',

  // open graph metadata (optional)
  description: 'LiOps',

  // social usernames (optional)
  linkedin: '희준-박-60147a170',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/about': 'b0fbc4aad79148d0848485e4beb6520d',
    '/contact': 'b0fbc4aad79148d0848485e4beb6520d'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     url: '/about'
  //   },
  //   {
  //     title: 'Contact',
  //     url: '/contact'
  //   }
  // ]
})
