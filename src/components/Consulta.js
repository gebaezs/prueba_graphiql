import React from 'react';

const query = `
    query {
        findTrailById(id: "5d0db7d1ea5f010001447645") {
            id
            usertrail
            nametrail
            origintrail
            destinytrail
        }
    }
`;

const url = "http://192.168.99.101:5500/graphql";
const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};
fetch(url, opts)
  .then(res => res.json())
  .then(
    ({ data }) => `
        <p>
          ID Ruta: ${data.findTrailById.id}
          <br/>
          Usuario: ${data.findTrailById.usertrail}
          <br/>
          Nombre ruta: ${data.findTrailById.nametrail}
          <br/>
          Origen: ${data.findTrailById.origintrail}
          <br/>
          Destino: ${data.findTrailById.destinytrail} 
        </p>
  `
  )
  .then(text => (document.body.innerHTML = text))
  .catch(console.error);

class Consulta extends React.Component{
    render() {
        return(
            <div>
                <h1>COMPONENTE CONSULTA</h1>
                  
            </div>
        );
    }
}

export default Consulta;