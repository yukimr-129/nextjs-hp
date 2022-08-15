import axios from "axios";
import { Layouts } from "../components/Layouts";

const Blog = ({ json }) => {
  console.log(json);
  return (
    <div>
      <p>Blog Page</p>
    </div>
  );
};

export const getServerSideProps = async ({ req }) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users/3");
  console.log(`${req ? "-server side" : "-client side"}`);

  return {
    props: {
      json: res.data,
    },
  };
};

// export const getStaticProps = async () => {
//   return {
//     props: {},
//   };
// };

Blog.getLayout = (page) => <Layouts title="Blog">{page}</Layouts>;

export default Blog;
