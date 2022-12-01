import { gql, useQuery } from '@apollo/client';
import GetMenu from '../queries/home/GET_MENU';

const Home = () => {
  const Menu = GetMenu().data?.menuItems?.edges;
  console.log(Menu);

  return (
    <div className="flex gap-4 justify-between">
      {Menu?.map((menu: any) => (
        <div key={menu.node.id}>
          <h1>{menu.node.label}</h1>
        </div>
      ))}
    </div>
  );
};

export default Home;
