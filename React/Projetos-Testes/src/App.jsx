import Life from "./Life";

const App = () => {
    const arrNumeros = [ 1 , 2, 3 , 4 , 5 , 6, 7 , 8, 9 , 10 ]
    return (
        <>
         <div></div>
         <div>{1 + 1}</div>
         {arrNumeros.map((item) => (
            <p>
             {item} * 5 = {item * 5}
            </p>
         )
           
         )}
         <div>
            <Life />
         </div>
        </>
    )
 }

export default App;

// o react ja faz essa estrutura automaticamente , não sei pq ele esta fazendo a mão