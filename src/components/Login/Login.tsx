import * as React from 'react';
import './Login.scss';

export interface ILoginProps { loggedIn?: boolean; }
export interface ILoginState { loggedIn: boolean; }

export class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: undefined) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  render () {
    return (
      <div className="component_Login">
        <div>Hey!</div>
      </div>
    );
  }
}

export default Login;
