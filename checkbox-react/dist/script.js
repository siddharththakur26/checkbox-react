function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const value = {
  '1': 'Siddharth',
  '2': 'Kim',
  '3': 'Timothy' };

var labels = new Array();
for (var cname in value) {
  labels.push(value[cname]);
}
//console.log(labels)

var keys = [];
for (var prop in value) {
  if (value.hasOwnProperty(prop)) {
    keys.push(prop);
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "onClick",





















    e => {
      this.arr = [];
      e.preventDefault();
      for (var key in this.state) {
        //console.log(this.state.indexOf(key))
        //console.log(this.state[key])
        if (this.state[key] === true) {
          this.arr.push(key);
        }
      }
      console.log(this.arr);
      for (let i = 0; i < this.arr.length; i++) {


      }









      //console.log(document.getElementsByName(arr[1])[0].value)    

    });this.state = { c1: false, c2: false, c3: false };this.arr = [];this.checkboxValues = [];this.onCheckChange = this.onCheckChange.bind(this);this.onClick = this.onClick.bind(this);}onCheckChange(e) {this.setState({ [e.target.id]: e.target.checked });}

  render() {

    return (

      React.createElement("div", null,
      React.createElement("input", { class: "labelColor", type: "checkbox", id: "c1", value: keys[0], checked: this.state.c1, onChange: this.onCheckChange }),
      React.createElement("label", null, " ", labels[0]), " ", React.createElement("br", null),
      React.createElement("input", { class: "labelColor", type: "checkbox", id: "c2", value: keys[1], checked: this.state.c2, onChange: this.onCheckChange }),
      React.createElement("label", null, " ", labels[1]), " ", React.createElement("br", null),
      React.createElement("input", { class: "labelColor", type: "checkbox", id: "c3", value: keys[2], checked: this.state.c3, onChange: this.onCheckChange }),
      React.createElement("label", null, " ", labels[2]), " ", React.createElement("br", null),
      React.createElement("br", null),
      React.createElement("a", { href: "#", onClick: this.onClick }, "Get Ids")));




  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("app"));