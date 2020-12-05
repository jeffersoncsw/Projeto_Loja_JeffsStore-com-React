import React from 'react';

import './Categorias.css';

export default class Categorias extends React.Component{
    render() {
        return(
            <div className="col-sm-3" id="categorias">
                <div><h3>Categorias</h3></div>
                <ul>
                    <li >Todos {12}</li>
                    <li >Notebook {3}</li>
                    <li >Teclado {2}</li>
                    <li >Impressora {3}</li>
                    <li >Tablet {2}</li>
                    <li >Mouse {2}</li>
                </ul>
            </div>
        )
    }
}