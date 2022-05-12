import React from 'react'
import { useState } from 'react';
import Background from '../components/Background';
import {useQuery} from '@apollo/client';
import { BUTTON_ACTION } from '../queries/Queries';
import { ButtonContainer } from '../components/ButtonContainer';
import { DataContainer } from '../components/DataContainer';
import Card from '../components/Card';
import Nav from '../components/Nav';
import { ButtonAfter } from '../components/ButtonAfter';
import { Blur } from '../components/Blur';

const parameter = Math.floor(Math.random()*825);
function App() {
  
  //Genera la Query con el Hook para obtener la data.
  const {loading,data,error,refetch} = useQuery(BUTTON_ACTION, {variables: {parameter}})
  //Crea un estado para almacenar el historial de las query realizadas.
  const [info, setInfo] = useState([])
  //Crea un estado para setear el panelde información.
  const [initialData, setInitialData] = useState(data)

  const [isActivate, setIsActivate] = useState(false)
  //Crea una función para cuando se dé click al botón de generar
  const Update = () => {
    //Hace un refetch para parametrizar la Query cada vez que se dé click al botón
    refetch({parameter: Math.floor(Math.random()*825)}); 
    //Almacena el historial de las query en el estado previo.
    setInfo(info => [...info, data]);
    //Despliega la información en el panel.
    setInitialData(data);
    setIsActivate(true);
  }
  //Crea una función para visualizar el historial.
  const Visualize = (x) => {
    setInitialData(x);
  }
  return (
    <Background>
      <Blur>
        <Nav data={info} Visualize={Visualize}/>
          {
            isActivate?
            <>
              <DataContainer>
                <Card data={initialData} />
                  <ButtonAfter>
                    <button onClick= {Update}>
                      <svg width="150px" height="30px" viewBox="0 0 150 30">
                        <polyline points="149,1 149,29 1,29 1,1 149,1"/>
                        <polyline points="149,1 149,29 1,29 1,1 149,1"/>
                      </svg>
                      <span>
                        Generate
                      </span>
                    </button>
                  </ButtonAfter>
              </DataContainer>
            </>:<>
              <ButtonContainer>
                <div>
                  <span>Click Me</span>
                </div>
                <button onClick= {Update}>
                  <svg width="150px" height="30px" viewBox="0 0 150 30">
                    <polyline points="149,1 149,29 1,29 1,1 149,1"/>
                    <polyline points="149,1 149,29 1,29 1,1 149,1"/>
                  </svg>
                  <span>
                    Generate
                  </span>
                </button>
              </ButtonContainer>
              
            </>
        } 
      </Blur>
    </Background>
  )
}

export default App
