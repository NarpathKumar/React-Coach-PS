import { useRouter } from "next/router";

const Category = (props) => {
  console.log(props);
  return (
    <div>
      <p></p>
    </div>
  );
};

Category.getInitialProps = async ({ query }) => {
  return { categoryID: query.categoryID };
};

export default Category;
