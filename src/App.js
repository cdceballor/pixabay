import React from 'react';
import Buscador from "./componentes/Buscador"

class App extends React.Component{

    state ={
        termino :" ",
        imagenes : {}
    }

    consultarApi = () => {
        const url = "https://pixabay.com/api/?key=17985116-dd3f239526336e6a5827ace2f&q=$" + this.state.termino;

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(result => this.setState({imagenes : result.hits }))
}

    //Funcion para retornar datos en consola
    //Cambiamos state de forma automática
    datosBusqueda = (termino) => {
        this.setState({
            termino
        }, () => {
            this.consultarApi();
        })
    }

render() {
        return (
            <div className="app container">
                <div className="jumbotron">
                  <p className="lead text-center">
                        Buscador
                  </p>
                    <Buscador
                        datosBusqueda={this.datosBusqueda}
                    />
                </div>
            </div>
        );
    }
}

export default App;
