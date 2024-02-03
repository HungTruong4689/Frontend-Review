import React, { Component } from 'react';


//PrintHello Component
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

//HOC React
const ExtentComponent = PrintHello(FirstComponent)



export default ExtentComponent;