class Demo extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>测试JSX引入！</div>
    )
  }
}


ReactDOM.render(
  <Demo />,document.getElementById("app")
)