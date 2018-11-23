import React, { Component, createContext } from "react";

const { Provider, Consumer } = createContext("light");
function ThemedButton(props) {
  // ThemedButton 组件从 context 接收 theme
  return <Consumer>{theme => <button {...props} theme={theme} />}</Consumer>;
}

// 中间组件
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

// 没有Provider comsumer接受默认值
export default class Context extends Component {
  render() {
    return (
      <Provider value="dark">
        <Toolbar />
      </Provider>
    );
  }
}
