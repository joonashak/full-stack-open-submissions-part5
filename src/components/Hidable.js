import React from 'react';


export default class Hidable extends React.Component {
  constructor(props) {
    super(props);

    const { initialVisibility } = props;

    this.state = {
      visible: initialVisibility || false,
    };
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });


  render() {
    const { children, buttonLabel } = this.props;
    const { visible } = this.state;

    const hideWhenVisible = { display: visible ? 'none' : '' };
    const showWhenVisible = { display: visible ? '' : 'none' };

    return (
      <div>
        <div style={showWhenVisible}>
          {children}
          <button onClick={this.toggleVisibility}>
            Cancel
          </button>
        </div>
        <div style={hideWhenVisible}>
          <button onClick={this.toggleVisibility}>
            {buttonLabel}
          </button>
        </div>
      </div>
    );
  }
}
