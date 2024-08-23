import React, { useState, UseEffect, useEffect } from "react";

const Life = () => {
    const [newUser, setNewUser ] = useState("");
    const [userList, setUserList] = useState(["Mano Bucha", "Madruga"]);
    const [count, setCount] = useState(0);

    const handleAddUser = () => {
        setUserList([...userList, newUser]);
        setNewUser("");
    }

    useEffect(() => {
       setCount(userList.length);
    }, [userList])

    // o segundo parametro e o array de dependencias
    // o [] so ira monitar mudanças na inicialização
    // [useList] ira monitorar toda vez que ter uma mudança no estado especificado( no caso o user), ou seja toda vez que houver uma
    // alteração no userList ele ira chamar o setCount e atualizar o contador
    // por isso e chamado de dependencias a atualização de um componente depende do outro

    // para simular o umount pode ser passado o com o uso do return dentro do useEffect(como callback)

    return (
        <>
          <input type="text" value={newUser} onChange={(event) => setNewUser(event.target.value)}/>
          <button type="button" onClick={handleAddUser}>Add</button>
          <div>{userList.map((item) => (
             <p>{item}</p>
          ))}
          <p>Numero total de Usuarios: {count}</p>
        </div>
        </>
    )
}

export default Life;

// value é onde fica armazenado o valor do input
// onChangeText e do proprio input
// O Onclick é um evento do button , que ira chamar a função setUserList, que ira alterar o estado do array
// o estado ira fazer o spread(...) e adicionar o nome que estiver no valor do campo de texto
// por fim depois do clique ele ira alterar novamente o state do newUser, zerando o campo
// toda vez que o onChange e chamado a um alteração de estado e ira novamente o renderizar o componente
// não e ideal que o componente renderize sempre porque a um custo maior de processamento
// pode ser feito tratativas como renderizar o componente fora do componente
