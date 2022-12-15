const LOGO = `
Logo: page(id: "logo", idType: URI) {
    id
    title
    featuredImage {
      node {
        id
        sourceUrl
        altText
      }
    }
  }
`;

export default LOGO;
