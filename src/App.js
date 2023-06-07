import counter from './counterState';
import { useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { SettingsButton } from './components/IconButton';

function App() {
  const [number,setNumber]= useRecoilState(counter)
  useEffect(()=>{console.log(number*2)},[number])
  const b = useMemo(()=>(number*2),[number])
  return (
    <div className="App">
     <button
      onClick={()=>{
        setNumber(number+1)
      }}
     >+</button>
     <div>{number}</div>
     <button
      onClick={()=>{
        setNumber(number-1)
      }}
     >-</button>
     <SettingsButton/>
    </div>
  );
}

export default App;
