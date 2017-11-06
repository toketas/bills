import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import View from './components/view.jsx';

class Main extends React.Component {
  render() {
    return <div>
      <Header/>
      <View/>
      <Footer/>
    </div>;
  }
};

ReactDOM.render(<Main/>, document.getElementById('app'))
