import { useState } from "react"
import * as S from "./style"
import "./App.scss"


export default function App(){
  const [primeiroValor, setPrimeiroValor] = useState ()
  const [segundoValor, setSegundoValor] = useState()
  const [resultado, setResultado] = useState()
  
  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value))
  }

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value))
  }

  const soma = () => {
    setResultado(primeiroValor + segundoValor)
  }

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor)
  }

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor)
  }

  const divisao = () => {
    setResultado(primeiroValor / segundoValor)
  }

  return(
    <main>
      <S.GlobalStyle/>
      <h1>Calculadora</h1>
      <input type="number" placeholder="Digite um número aqui" onChange={capturandoPrimeiroValor}/>
      <input type="number" placeholder="Digite um número aqui" onChange={capturandoSegundoValor}/>
      <div class="botoes">
      <button onClick={soma}>+</button>
      <button onClick={subtracao}>-</button>
      <button onClick={multiplicacao}>*</button>
      <button onClick={divisao}>/</button>
      </div>
      <h2>{resultado}</h2>
    </main>
  )
}