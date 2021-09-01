import React from "react"

class Hello extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "gulshan"
        }
    }

    Submit = () => {
        this.setState({name: "yadav"})
    }

    render(){
        return(
            <div>
                <h1 onClick = {this.Submit}>{this.state.name}</h1>
            </div>
        )
    }
}
export default Hello; 