import React, { Component } from 'react';


const PrintHello = ComposedComponent => class extends Component{
    onClick(){
        console.log("hello")
    }

    render(){
        return <ComposedComponent {...this.props} onClick={this.onClick} />
    }
}
const FirstComponent = props =>{
    <div className="">Hello, {props.name}! I m a FirstComponent</div>
}

const ExtentComponent = PrintHello(FirstComponent)



export default ExtentComponent;