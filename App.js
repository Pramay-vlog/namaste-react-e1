let heading = React.createElement("p", { id: "title" }, [
    "Hola Mundo",
    React.createElement("h1", null, "I am h1"),
]);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
