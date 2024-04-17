import React from 'react'

function Update() {
  let n1, n2, n3, n4, n5, n6, n7, n8, n9;

  const handle = async (e) => {
    e.preventDefault();
    n1 = e.target.n1.value;
    n2 = e.target.n2.value;
    n3 = e.target.n3.value;
    n4 = e.target.n4.value;
    n5 = e.target.n5.value;
    n6 = e.target.n6.value;
    n7 = e.target.n7.value;
    n8 = e.target.n8.value;
    n9 = e.target.n9.value;
    const formData = { 'n1': n1, 'n2': n2, 'n3': n3, 'n4': n4, 'n5': n5, 'n6': n6, 'n7': n7, 'n8': n8, 'n9': n9 }
    try {
      const response = await fetch('https://trekbackend.onrender.com/getgeocode', {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
    <div>
      <form onSubmit={handle}>
        <input type='text' name='n1'></input>
        <input type='text' name='n2'></input>
        <input type='text' name='n3'></input>
        <input type='text' name='n4'></input>
        <input type='text' name='n5'></input>
        <input type='text' name='n6'></input>
        <input type='text' name='n7'></input>
        <input type='text' name='n8'></input>
        <input type='text' name='n9'></input>
        <button>ADD</button>
      </form>
    </div>
  )
}

export default Update
