import React from 'react'

function AddCategory() {

    let category;

    const addcategory = async (e) =>{
        e.preventDefault();
        window.location.href = 'category'
        category = e.target.category.value;
        const formData = { 'category': category}
        console.log(formData);
    try {
      const response = await fetch('', {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(formData)
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
      <form onSubmit={addcategory}>
        <input type='text' placeholder='Search' name='category'/>
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddCategory

