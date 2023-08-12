
// import Posts from "./posts";
function PostContainer() {
  const React = window.React;
  const [posts, setPosts] = React.useState([]);

  const getPost = async () => {
    const res = await fetch(`https://my-json-server.typicode.com/typicode/demo/posts`);
    const data = await res.json();
    setPosts(data);
  };
  React.useEffect(() => {
    getPost();
  }, []);
  console.log(posts);

  return React.createElement(
    "table",
    null,
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          null,
          "ID"
        ),
        React.createElement(
          "th",
          null,
          "NAME"
        )
      )
    ),
    React.createElement(Posts, { key: Math.random(), posts: posts })
  );
}
export default PostContainer;
function Post(props) {
  const { id, title } = props.post;
  const React = window.React;
  console.log("pop", title);

  return React.createElement(
    "tr",
    { key: id },
    React.createElement(
      "td",
      null,
      id
    ),
    React.createElement(
      "td",
      null,
      title
    )
  );
}
// import Post from "./post";
function Posts(props) {
  const { posts } = props;
  console.log("po", props);
  const React = window.React;
  return React.createElement(
    "tbody",
    null,
    posts && posts.length > 0 && posts.map((post, index) => React.createElement(Post, { key: index, post: post }))
  );
}
