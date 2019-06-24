import React from 'react';
import DirectionGraphq from './IpGraphql';

class LoginGraph extends React.Component{
    
    state = {
        
    }

    handleClick = e => {
    //    console.log("ESTOY HACIENDO CLICK")


        console.log("=====================================================================")
        console.log("--> ESTO ES PARA LOGEARSE")

        const query = `
            mutation {
                signIn(user: {
                    email: "${this.state.CampoUsuario}"
                    password: "${this.state.CampoPassword}"
                }) {
                    content
                    message
                    status
                } 
            }
        `;


        const url = DirectionGraphq;
        const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
        };

        fetch(url, opts)
        .then(res => res.json())
        .then(console.log)
        .catch(console.error);
        console.log("=====================================================================\n\n")
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }


    
    render(){
        return(
            <div>
                <h1>LOGIN</h1>
                {/* {console.log(this.state.CampoUsuario)} */}
                {/* {console.log(this.state.CampoPassword)} */}
                <input onChange={this.handleChange} name="CampoUsuario" value={this.state.CampoUsuario}/>
                <br/>
                <br/>
                <input onChange={this.handleChange} name="CampoPassword" value={this.state.CampoPassword}/>
                <br/>
                <br/>
                <a href="www.google.com" onClick={this.handleClick}>ENTRAR</a>
            </div>
        );
    }
}


export default LoginGraph;