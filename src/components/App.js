import React, { Component } from 'react'
import { Input } from 'antd'

class App extends Component {

constructor(props){
    super(props)
    this.state = { name : 'clauvane'}
}

    handle = (e) => {
        this.setState({name: e.target.value})
    }

    render(){
        return (
            <div>
                <div>Hello World 4</div>
                <Input value={this.state.name}onChange={this.handle}></Input>
            </div>
        )
    }
}

export default App