import React from 'react'

function Admin() {

    const add = async (e) =>{
        e.preventDefault();
        window.location.href = 'addProduct'   
    }
    const view = async (e) =>{
        e.preventDefault();
        window.location.href = 'view'   
    }
    const update = async (e) =>{
        e.preventDefault();
        window.location.href = 'update'   
    }

  return (
    <div>
      <button onClick={add}>Add</button>
      <button onClick={view}>View</button>
      <button onClick={update}>Update</button>
    </div>
  )
}

export default Admin
