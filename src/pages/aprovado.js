import '../App.css';
 import logo from "../logo.svg"
 import { useEffect, useState } from 'react'
 import { useParams } from 'react-router-dom'
 
 function Aprovacao() {
     const aprovados = [
         { "id": 1, "nome": "Ana Jardim" },
         { "id": 2, "nome": "Anny Cerazi" },
         { "id": 3, "nome": "Antonio Andre" },
         { "id": 4, "nome": "Corbi" },
         { "id": 5, "nome": "Davi Duarte" },
         { "id": 6, "nome": "Eduardo Santana" },
         { "id": 7, "nome": "Emanuelly" },
         { "id": 8, "nome": "Gabriel Barto" },
         { "id": 9, "nome": "Gabriel Nascimento" },
         { "id": 10, "nome": "Humberto Filho" },
         { "id": 11, "nome": "Jaime" },
         { "id": 12, "nome": "Kaian" },
         { "id": 13, "nome": "Maria Clara" },
         { "id": 14, "nome": "Mirela Bianchi" },
         { "id": 15, "nome": "Nicolas Silva" },
         { "id": 16, "nome": "Nicole Neves" },
         { "id": 17, "nome": "Rafael Nakahara" },
         { "id": 18, "nome": "Rafael Rodrigues Santana" },
         { "id": 19, "nome": "Rafael Santos" },
         { "id": 20, "nome": "Reimar" },
         { "id": 21, "nome": "Sophia Senne" },
         { "id": 22, "nome": "Vinicius Marques" },
         { "id": 23, "nome": "Joao Carbone"},
         { "id": 24, "nome": "Richard"},
     ];
 
     const { id } = useParams();
     const aprovado = aprovados.find((aprovado) => aprovado.id === Number(id));
     const [usuario, setUsuario] = useState("");
     useEffect(() => {
         if (aprovado) {
             setUsuario(aprovado.nome);
         } else {
             setUsuario("Desconhecido");
         }
     }, [aprovado]);
 
 
 
         return (
             <div className="App">
                 <h1>Parabens, <br /> <span>{usuario}</span>.</h1>
                 <h2>Voce foi</h2>
                 <h1><span>aprovado</span></h1>
                 <h2>no processo seletivo!</h2>
 
                 <img src={logo} alt="logotipo echosec" />
 
                 <h3>Agora voce tem um encontro marcado conosco toda <span>terca-feira</span>, das <span>13h as 14h</span>.</h3>
 
                 <p>Mas, antes disso, voce precisa confirmar a sua <a href="https://forms.gle/EQf8dSFwgM4XnNF79">inscricao</a> no clube e conhecer a nossa <a href="https://www.canva.com/design/DAGi-sfQylE/LGKWhFjHWvpDA74CrB6kuA/edit?utm_content=DAGi-sfQylE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" >estrutura organizacional</a>.</p>
             </div>
         );
     }
 
 export default Aprovacao;