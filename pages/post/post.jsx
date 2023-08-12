function Post(props) {
  const { id, title } = props.post;
  const React = window.React;
  console.log("pop", title);

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
    </tr>
  );
}
