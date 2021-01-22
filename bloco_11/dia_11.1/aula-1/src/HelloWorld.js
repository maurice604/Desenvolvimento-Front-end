import React from 'react';

class HelloWorld extends React.Component {
    render() {
        const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];
        const App = () => ( <ul>{ tarefas.map(tarefa => <li>{ tarefa }</li>) }</ul> );

        return <div>
        <p> Maurice Alves Diniz Estevam </p>
        <div> { App() } </div>
    </div>
   
    }
}

export default HelloWorld;