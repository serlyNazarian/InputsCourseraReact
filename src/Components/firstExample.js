function FirstExample() {
  return (
    <div>
      <button
        onClick={function () {
          console.log("first example");
        }}
      >
        An inline anonymous ES5 function event handler
      </button>
    </div>
  );
}

export default FirstExample;
