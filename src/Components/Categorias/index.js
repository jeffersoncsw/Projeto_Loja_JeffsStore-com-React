import React from 'react';

import './Categorias.css';

export default class Categorias extends React.Component{
    render() {
        return(
            <div >
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