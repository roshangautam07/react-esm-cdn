const { useState } = React;

const Example = ({ title }) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{title}</p>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};

// Render it
ReactDOM.render(
    <Example title="Example using Hooks:" />,
    document.getElementById("react")
);