import React, { Component, createContext } from "react";

const themes = {
  light: {
    foreground: "#ffffff",
    background: "#222222"
  },
  dark: {
    foreground: "#000000",
    background: "#eeeeee"
  }
};

const { Provider, Consumer } = createContext({
  theme: themes.dark,
  toggleTheme: () => {}
});

function ThemeTogglerButton(props) {
  return (
    <Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          style={{ backgroundColor: theme.background }}
        >
          Toggle Theme
        </button>
      )}
    </Consumer>
  );
}

// 一个使用到ThemedButton组件的中间组件
function Toolbar(props) {
  return (
    <div>
      <p>middle</p>
      <ThemeTogglerButton />
    </div>
  );
}

export default class DynamicContext extends Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  render() {
    // ThemedButton 位于 ThemeProvider 内
    // 在外部使用时使用来自 state 里面的 theme
    // 默认 dark theme
    return (
      <div>
        <Provider value={this.state}>
          <Toolbar />
        </Provider>
        {/* <section>
          <ThemedButton />
        </section> */}
      </div>
    );
  }
}
