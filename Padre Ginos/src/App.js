const Pizza = (props) =>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.descr),
    ]);
};


const App = () => {
    return React.createElement(
        "div", {}, [
            React.createElement("h1", {}, "Padre Gino's"),
            React.createElement(Pizza, {
                name: "the margherita pizza",
                descr: "A nice pizza"
            }),
            React.createElement(Pizza, {
                name: "paneer tikka pizza",
                descr: "an indian style pizza"
            }),
            React.createElement(Pizza,{
                name: "farmhouse pizza",
                descr: "a farm and an house haha"
            }),
            React.createElement(Pizza, {
                name: "Burger Pizza",
                descr: "A burger which tastes like pizza"
            }),
            React.createElement(Pizza, {
                name: "Chicken Pizza",
                descr: "for all non veg people"
            }),
        ]
);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));