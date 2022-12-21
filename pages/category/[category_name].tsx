import react from 'react';

const CategoryPages = ({ post }: any) => {
  console.log(post);

  return <div>id</div>;
};

export default CategoryPages;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category_name: '1' } },
      { params: { category_name: '2' } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps() {
  return {
    // Passed to the page component as props
    props: { post: {} },
  };
}
