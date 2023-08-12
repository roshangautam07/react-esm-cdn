const Homes = () => {
  const React = window.React;
  const { Link } = window.Router;
  console.log("This is home");
  return (
    <div>
      <h3>This is home</h3>
      <Link to="/">Goto back</Link>
    </div>
  );
};
export default Homes;
