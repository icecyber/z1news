import { gql, useQuery } from '@apollo/client';
import client from '../lib/apollo';

const GET_MENU = gql`
  query Menu {
    menuItems(where: { location: HCMS_MENU_FOOTER }) {
      nodes {
        id
        label
        path
        url
      }
    }
  }
`;

const Home = () => {
  const { data, error, loading } = useQuery(GET_MENU);
  console.log(data);

  return <div className="">hi</div>;
};

export default Home;
