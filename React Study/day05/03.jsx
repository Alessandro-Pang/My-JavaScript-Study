class Demo2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let styles = {
      width: 150,
      height: 25,
      border: "1px solid orange",
    };
    console.log(this.props.value)
    return (
      <input onChange={this.props.userInputChange} style={styles} type={this.props.type} value={this.props.value} />
    );
  }
}
//FIXME: 这个Demo 无法正确的传输动态值
// 问题疑似出现在同一组插件的原因上面???
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "1111",
      password:"2222"
    };
    this.userInputChange = this.userInputChange.bind(this);
  }

  userInputChange(e) {
    let target = e.target;
    let value = target.type == "text" ? target.username : target.password;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          用户名：
          <Demo2
            userInputChange={this.userInputChange}
            name="username"
            type="text"
            value={this.state.username}
          />
        </label>
        <br/>
        <label>
          密&nbsp;&nbsp;&nbsp;&nbsp;码：
          <Demo2
            userInputChange={this.userInputChange}
            name="password"
            type="password"
            value={this.state.password}
          />
        </label>
        <br/>
        <input type="submit" value="登录" />
      </form>
    );
  }
}

let c = new Common();

ReactDOM.render(<Demo />, c.create());
