const heading = React.createElement("div", { }, 
[React.createElement("div", { }, 
[React.createElement("h1", { }, "Hello from H1"),
React.createElement("h2", { }, "Hello from H2")]),
React.createElement("div", { }, 
[React.createElement("h1", { }, "Hello from H1"),
React.createElement("h2", { }, "Hello from H2")])]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)