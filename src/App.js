  import React, { useState } from 'react';
  import Keyboard from './Components/Keyboard/Buttons';
  import './App.css';

  function App() {
    
    const [data, setData] = useState({ operacion: '', resultado: '' });

    // Función que maneja la escritura en la calculadora
    const escritura = (event) => {
      const valor = event.target.innerText;
      const operadores = valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '%';

      // Condiciones para manejar diferentes casos al escribir
      if (data.operacion.length >= 10) return;
      if (valor === '+/-' && data.operacion === '') return;
      if (valor === '%' && data.operacion.includes('%')) return;

      if (data.operacion.includes('Error')) {
        setData({ ...data, operacion: valor });
      } else if (data.resultado !== '' && data.operacion === '' && operadores) {
        setData({ ...data, operacion: `${data.resultado}${valor}` });
      } else if (valor === '+/-' && data.operacion !== '') {
        if (data.operacion.slice(0, 1) === '-') {
          setData({ ...data, operacion: `${data.operacion.slice(1, data.operacion.length)}` });
        } else {
          setData({ ...data, operacion: `-${data.operacion}` });
        }
      } else {
        setData({ ...data, operacion: `${data.operacion}${valor}` });
      }
    };

    // Función para eliminar el último carácter de la operación
    const eliminar = () => {
      setData({ ...data, operacion: data.operacion.slice(0, data.operacion.length - 1) });
    };

    // Función para limpiar la calculadora
    const limpiar = () => {
      setData({ operacion: '', resultado: '' });
    };

    // Función para calcular el resultado de la operación
    const resultado = () => {
      try {
        let resultadoCalculado = '';

        if (data.operacion.includes('%')) {
          const valores = data.operacion.split('%');
          resultadoCalculado = eval(`${valores[1]}*(${valores[0]}/100)`);
        } else {
          resultadoCalculado = eval(data.operacion);
        }

        setData({ ...data, resultado: resultadoCalculado, operacion: '' });
      } catch (error) {
        setData({ ...data, operacion: 'Error' });
      }
    };


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Calculadora Con React</h1>
        </header>
        <main>
          <span className="resultado" id='resultado'>{data.resultado}</span>
          <span className="display" id='display'>{data.operacion}</span>
          <Keyboard texto='C' clase='gris' handleClick={ limpiar }/>
          <Keyboard texto='+/-' clase='gris' handleClick={ escritura }/>
          <Keyboard texto='%' clase='gris' handleClick={ escritura }/>
          <Keyboard texto='/' clase='operacion' handleClick={ escritura }/>
          <Keyboard texto='7' clase='numero' handleClick={ escritura }/>
          <Keyboard texto='8' clase='numero' handleClick={ escritura }/>
          <Keyboard texto='9' clase='numero' handleClick={ escritura }/>
          <Keyboard texto='*' clase='operacion' handleClick={ escritura }/>
          <Keyboard texto='4' clase='numero' handleClick={ escritura }/>
          <Keyboard texto='5' clase='numero' handleClick={ escritura }/>
          <Keyboard texto='6' clase='numero' handleClick={ escritura }/>
          <Keyboard texto='-' clase='operacion' handleClick={ escritura }/>
          <Keyboard texto='1' clase='numero' handleClick={ escritura }/>
          <Keyboard texto='2' clase='numero' handleClick={ escritura }/>
          <Keyboard texto='3' clase='numero' handleClick={ escritura }/>
          <Keyboard texto='+' clase='operacion' handleClick={ escritura }/>
          <Keyboard texto='.' clase='numero' handleClick={ escritura }/>
          <Keyboard texto='0' clase='numero' handleClick={ escritura }/>
          <Keyboard texto='◀' clase='numero' handleClick={ eliminar }/>
          <Keyboard texto='=' clase='operacion' handleClick={ resultado }/>
        </main>
        <footer className="App-footer">
          <a className="App-link" href="https://pedroluis-ellargo.github.io/myBlog" target="_blank" rel="noopener noreferrer">
            Pedro Valenzuela
          </a>
        </footer>
      </div>
    );
  }

  export default App;
