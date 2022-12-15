export const MAIN_SOCIAL_MEDIA = `
SocialMedia: page(id: "socialmedia", idType: URI) {
  id
  title
  children {
    edges {
      node {
        id
        ... on Page{
          title
          custom_icon {
            backgroundColor
            icon
            iconColor
            link
          }
        }
      }
    }
  }
}
  `;
