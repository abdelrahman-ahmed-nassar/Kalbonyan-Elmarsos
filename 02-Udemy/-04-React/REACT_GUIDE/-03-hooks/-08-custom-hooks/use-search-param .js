// Tracks the browser's location search param.

const useSearchParam = (param) => {
  const getValue = React.useCallback(
    () => new URLSearchParams(window.location.search).get(param),
    [param]
  );

  const [value, setValue] = React.useState(getValue);

  React.useEffect(() => {
    const onChange = () => {
      setValue(getValue());
    };

    window.addEventListener("popstate", onChange);
    window.addEventListener("pushstate", onChange);
    window.addEventListener("replacestate", onChange);

    return () => {
      window.removeEventListener("popstate", onChange);
      window.removeEventListener("pushstate", onChange);
      window.removeEventListener("replacestate", onChange);
    };
  }, []);

  return value;
};
const MyApp = () => {
  const post = useSearchParam("post");

  return (
    <>
      <p>Post param value: {post || "null"}</p>
      <button
        onClick={() =>
          history.pushState({}, "", location.pathname + "?post=42")
        }
      >
        View post 42
      </button>
      <button onClick={() => history.pushState({}, "", location.pathname)}>
        Exit
      </button>
    </>
  );
};

ReactDOM.render(<MyApp />, document.getElementById("root"));
