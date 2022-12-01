import { gql, useQuery } from '@apollo/client';

const GET_MENU = gql`
  query Menu {
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
  }
`;

const GetMenu = () => {
  const { data, error, loading } = useQuery(GET_MENU);
  return { data, error, loading };
};

export default GetMenu;
