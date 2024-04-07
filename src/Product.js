import React from 'react'

function Product() {

    const addCategory = async (e) =>{
        e.preventDefault();
        window.location.href = 'category'
      }

      const showCategory = async (e) =>{
        e.preventDefault();
        window.location.href = 'addcategory'
        try {
            const response = await fetch('', {
              mode: 'cors',
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(''),
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
      <button onClick={addCategory}>Category Page</button>
      <button onClick={showCategory}>Show Category</button>
    </div>
  )
}

export default Product
