import React from 'react'
import { Button, Icon } from 'antd'

class MyButtons extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      iconLoading: false,
    }
  }

  // state = {
  //   loading: false,
  //   iconLoading: false,
  // }

  enterLoading = () => {
    this.setState({ loading: true });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }

  render() {
    return (<span>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br />
        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          Click me!
        </Button>
        <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
          Click me!
        </Button>
        <br />
        <Button shape="circle" loading />
        <Button type="primary" shape="circle" loading />
        <Icon type="pushpin-o" />
      </span>);
  }
}

export default MyButtons
