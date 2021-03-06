import React, { Component } from 'react';

import withForm from '../with-form';

@withForm({ title: '用户注册' })
class Register extends Component {
  /* state = {
    username: '',
    password: '',
    rePassword: ''
  };

  register = e => {
    e.preventDefault();
    // 获取表单数据
    const { username, password, rePassword } = this.state;

    alert(`用户名: ${username}  密码: ${password} 确认密码: ${rePassword}`);
  };

  handleChange = key => {
    return e => {
      this.setState({
        [key]: e.target.value
      });
    };
  }; */
  render() {
    const { handleChange, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        用户名: <input type='text' onChange={handleChange('username')} />
        <br />
        密码:
        <input type='password' onChange={handleChange('password')} />
        <br />
        确认密码:
        <input type='password' onChange={handleChange('rePassword')} />
        <br />
        <input type='submit' value='注册' />
      </form>
    );
  }
}

// const NewComp = withForm({ title: '用户注册' })(Register);
// export default NewComp;
export default Register;
