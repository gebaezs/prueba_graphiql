import React from 'react';
import DirectionGraphq from './IpGraphql';


class Consulta extends React.Component{

    state = {
        rutas:{
            data:{
                allTrails: []
            }
        }
    }

    handleChange = (e) => {
        // console.log({
        //     name: e.target.name,
        //     value: e.target.value
        // });
        this.setState({
            [e.target.name]: e.target.value
        })
    }; 
    

    handleCLickAllTrails = e => {

        console.log("=====================================================================")
        console.log("--> TODAS LAS RUTAS DE LA BASE DE DATOS")

        const query = `
            query {
                allTrails{
                id
                usertrail
                nametrail
                origintrail
                destinytrail
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
        .then(response => {
            this.setState({ rutas : response})
        })
        .then(console.log)
        .catch(console.error);
        console.log("=====================================================================\n\n")
    }


    handleCLickFindTrailsByUser = e => {

        console.log("=====================================================================")
        console.log("--> TODAS LAS RUTAS DE LA BASE DE DATOS")

        const query = `
        query {
            findTrailsByUser(id: ${this.state.Usuario} ){
              nametrail
              origintrail
              destinytrail
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




    render() {
        console.log("*****************************************")
        console.log("*****************************************")
        console.log(this.state.rutas.data.allTrails)
        console.log("*****************************************")
        console.log("*****************************************")
        return(
            <div>
                <h1>COMPONENTE CONSULTA</h1>
                <button onClick={this.handleCLickAllTrails}>LISTA RUTAS</button>
                <br/>
                <br/>
                <input onChange={this.handleChange} className="CodigoUsuario" name="CodigoUsuario" value={this.state.CodigoUsuario}/>
                <button onClick={this.handleCLickFindTrailsByUser}>LISTA RUTAS USUARIO</button>
                <br/>
                <br/>
                <input onChange={this.handleChange} className="CodigoRuta" name="CodigoRuta" value={this.state.CodigoRuta}/>
                <button onClick={this.handleCLickFindTrailById}>RUTA ESPECIFICA</button>
                <br/>
                <br/>
                <input onChange={this.handleChange} className="BorrarRutasUsuario" name="BorrarRutasUsuario" value={this.state.BorrarRutasUsuario}/>
                <button onClick={this.handleCLickDeleteTrails}>BORRAR RUTAS USUARIO</button>
            </div>
        );
    }
}

export default Consulta;