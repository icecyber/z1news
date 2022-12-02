const MENU = `
    menuItems(where: { location: HCMS_MENU_FOOTER }) {
      edges {
        node {
          id
          label
          url
          path
        }
      }
    }
`;

export default MENU;
