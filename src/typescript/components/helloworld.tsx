import * as React from 'react';

type HelloWorldProps = {
  propMessage: string;
};

type HelloWorldState = {
  name: string;
}

export class HelloWorld extends React.Component<HelloWorldProps, HelloWorldState> {
  constructor(props: HelloWorldProps) {
    super(props);

    this.state = {
      name: '',
    }

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(ev: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      name: ev.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.propMessage}</h1>
        <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Name"/>
        <div>
          {
            this.state.name ? `Hello ${this.state.name}` : "Hello world!"
          }
        </div>
      </div>
    );
  }
}