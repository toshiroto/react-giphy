import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };
class Hello extends Component {
  constructor (props) {
    super (props);
    this.state = {
      clicked: false,
      counter: 0
    };
  }

  handleClicked = () => {
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  };

  render () {
    // Build and return HTML for the component.
    return (
      <div className={this.state.clicked ? 'clicked' : null}
      onClick={this.handleClicked}>
      Hello {this.props.name} {this.state.counter}
      </div>
    );
  }

}


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Carlos" />, root);
}
