// import Post from "./post";
function Posts(props) {
  const { posts } = props;
  console.log("po", props);
  const React = window.React;
  return (
    <tbody>
      {posts &&
        posts.length > 0 &&
        posts.map((post, index) => <Post key={index} post={post} />)}
    </tbody>
  );
}
