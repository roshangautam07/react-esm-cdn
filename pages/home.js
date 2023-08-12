const Homes = () => {
  const React = window.React;
  const { Link } = window.Router;

  console.log(window);
  console.log("This is home");
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h3",
      null,
      "This is home"
    ),
    React.createElement(
      Link,
      { to: "/" },
      "Goto back"
    )
  );
};
export default Homes;
