import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layouts } from "../components/Layouts";

const Home = ({ props: { json } }) => {
  console.log(json);
  return (
    <>
      <p className="text-4xl">Welcome To Nextjs</p>
      <a href={"/blog"}>Blog</a>
      <a href={"/contact"}>Contact</a>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/contact"}>Contact</Link>
    </>
  );
};

Home.getLayout = (page) => <Layouts title="Home">{page}</Layouts>;

Home.getInitialProps = async ({ req }) => {
  let res;
  if (!!req) {
    res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
  } else {
    res = await axios.get("https://jsonplaceholder.typicode.com/users/2");
  }
  console.log(`${req ? "-server side" : "-client side"}`);
  return {
    props: {
      json: res.data,
    },
  };
};

// export const getServerSideProps = async ({ context = null }) => {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
//   //   console.log(context);
//   return {
//     props: {
//       json: res.data,
//       context,
//     },
//   };
// };

export default Home;
