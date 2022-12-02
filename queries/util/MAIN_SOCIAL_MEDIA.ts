export const MAIN_SOCIAL_MEDIA = `
SocialMedia: page(id: "socialmedia", idType: URI) {
  id
  title
  children {
    nodes {
      ... on Page {
        title
        custompageExternallink {
          externalLink
        }
        featuredImage {
          node {
            id
            sourceUrl
            altText
            sourceUrl
          }
        }
      }
    }
  }
}
  `;
