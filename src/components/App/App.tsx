import * as React from 'react';
import { IUser } from '../../api/github/interfaces.d';
import { Login } from '../Login';
import './App.scss';

interface IAppState {
  readonly user?: IUser
}

export class App extends React.Component<undefined, IAppState> {
  constructor (props: undefined) {
    super(props);

    this.state = {
      user: undefined
    };
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="root_container">
        <h1>monzter</h1>
        {
          <Login />
        }
      </div>
    );
  }
}

export default App;
