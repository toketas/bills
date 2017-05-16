import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

class Main extends React.Component {
  render() {
    return <div>
      <Header/>
      <Footer/>
    </div>;
  }
};

ReactDOM.render(<Main/>, document.getElementById('app'))
