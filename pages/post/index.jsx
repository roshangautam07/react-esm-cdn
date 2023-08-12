// import Posts from "./posts";
function PostContainer() {
  const React = window.React;
  const [posts, setPosts] = React.useState([]);

  const getPost = async () => {
    const res = await fetch(
      `https://my-json-server.typicode.com/typicode/demo/posts`
    );
    const data = await res.json();
    setPosts(data);
  };
  React.useEffect(() => {
    getPost();
  }, []);
  console.log(posts);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
        </tr>
      </thead>
      {/* {posts.length > 0 ? <Posts posts={posts} /> : "Loading"} */}
      {/* <React.Suspense fallback={<div>Loading Posts...</div>}> */}
      <Posts key={Math.random()} posts={posts} />
      {/* </React.Suspense> */}
    </table>
  );
}
export default PostContainer;
