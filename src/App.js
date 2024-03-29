import React, { Component } from 'react';

import { MainContainer, Footer } from './components/styled-components';

import Header from './components/Header';
import Top from './components/Top';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleMenu: false,
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isToggleMenu: !prevState.isToggleMenu,
    }));
    console.log('hgo');
  };
  render() {
    return (
      <div className="App">
        <Header isToggleMenu={this.state.isToggleMenu} toggleMenu={this.toggleMenu} />
        <MainContainer>
          <Top />
        </MainContainer>
        <Footer>© 2018 syunsukekobashi.co</Footer>
      </div>
    );
  }
}

export default App;
