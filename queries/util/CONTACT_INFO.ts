export const CONTACT_INFO = `
    ContactInfo: page(id: "contact-info", idType: URI) {
      id
      title
      children {
        nodes {
          ... on Page {
            title
            content
            featuredImage {
              node {
                id
                sourceUrl
              }
            }
            custompageExternallink {
              customEmail
            }
          }
        }
      }
    }
  `;
