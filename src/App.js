import React, { Component } from 'react';

import { MainContainer, Footer } from './components/styled-components';

import Header from './components/Header';
import Top from './components/Top';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleMenu: false,
      isToggleHands: false,
      cheerCount: 0,
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isToggleMenu: !prevState.isToggleMenu,
    }));
  };

  toggleHands = () => {
    this.setState({ isToggleHands: !this.state.visible });
    setInterval(this.setState({ isToggleHands: !this.state.visible }), 500);
  };

  fetchCheerCount = () => {
    const result = 3000;
    this.setState({ cheerCount: result });
  };

  pushCheerCount = () => {
    this.setState(prevState => {
      let cnt = prevState.cheerCount;
      cnt++;
      return {
        cheerCount: cnt,
      };
    });
  };

  componentDidMount() {
    this.fetchCheerCount();
  }

  render() {
    return (
      <div className="App">
        <Header isToggleMenu={this.state.isToggleMenu} toggleMenu={this.toggleMenu} />
        <MainContainer>
          <Top
            isToggleHands={this.state.isToggleHands}
            toggleHands={this.toggleHands}
            cheerCount={this.state.cheerCount}
            pushCheerCount={this.pushCheerCount}
          />
        </MainContainer>
        <Footer>© 2018 syunsukekobashi.co</Footer>
      </div>
    );
  }
}

export default App;
