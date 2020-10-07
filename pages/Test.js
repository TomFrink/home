import fetch from "node-fetch";

// events will be populated at build time by getStaticProps()
const Posts = ({ posts }) => {
  return (
    <ol>
      {posts.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ol>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
