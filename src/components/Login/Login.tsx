import * as React from 'react';
import './Login.scss';
import '../../styles/buttons.scss';
import logo from '../../img/logo.svg';

export interface ILoginProps { loggedIn?: boolean; loginUrl: string }
export interface ILoginState { loggedIn: boolean; loading: boolean; }

export class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: undefined) {
    super(props);

    this.state = {
      loggedIn: false,
      loading: true
    };
  }

  render () {
    return (
      <section className="component_login">
        <img className="component_login-logo" src={logo} />
        <a className="button button--primary component_login-button" href={this.props.loginUrl}>Login to Monzo</a>
      </section>
    );
  }
}

export default Login;
