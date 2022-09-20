import React from 'react';

interface Props {
    nome: string
    idade?: number
}
const Person = (props: Props) => {
    return (
        <div id={'effect'}>
            <h1>Meu nome é {props.nome}</h1>
            {
                props.idade ?
                    <h2>Minha idade é {props.idade}</h2>
                    :
                    <h2>Não tenho idade.</h2>
            }
        </div>
    );
}

export default Person;
