import * as React from 'react';
import { Login } from '../Login';
import { Monzter } from '../../api/monzter'
import './App.scss';

interface IAppState {
  readonly loginUrl?: string
}

export class App extends React.Component<undefined, IAppState> {
  constructor (props: undefined) {
    super(props);

    this.state = {
      loginUrl: ''
    };
  }

  private async getLoginUrl () {
    const loginUrl = await Monzter.GetMonzoLoginUrl('edwarddamato');
    this.setState({ loginUrl });
  }

  componentDidMount () {
    this.getLoginUrl();
  }

  render () {
    return (
      <div className="root_container">
        <Login loginUrl={this.state.loginUrl} />
      </div>
    );
  }
}

export default App;
