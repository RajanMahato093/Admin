import React from 'react'

function Main() {
  const handle = async (e) =>{
    e.preventDefault();
    const var1 = {
      uId: "Prabhat",
      pId: "001",
      quantity: 1
    }
    try {
      const response = await fetch('https://localhost:3001/', {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(var1),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      }
      else {
        console.error('No Response');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  }
  const handle1 = async (e) =>{
    e.preventDefault();
    const var1 = {
      uId: "Rajan",
      pId: "002",
      quantity: 1
    }
    try {
      const response = await fetch('https://localhost:3001/', {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(var1),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      }
      else {
        console.error('No Response');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  }
  const handle2 = async (e) =>{
    e.preventDefault();
    const var1 = {
      uId: "Dhruv",
      pId: "003",
      quantity: 1
    }
    try {
      const response = await fetch('https://localhost:3001/', {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(var1),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      }
      else {
        console.error('No Response');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  }
  const handle3 = async (e) =>{
    e.preventDefault();
    const var1 = {
      uId: "Tanay",
      pId: "004",
      quantity: 1
    }
    try {
      const response = await fetch('https://localhost:3001/', {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(var1),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      }
      else {
        console.error('No Response');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  }


  return (
    <div className="App">
      <button onClick={handle}>buttton 1</button>
      <button onClick={handle1}>button 2</button>
      <button onClick={handle2}>button 3</button>
      <button onClick={handle3}>button 4</button>
    </div>
  );
}

export default Main
