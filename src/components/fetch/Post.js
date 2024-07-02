async function Post(objeto){

    const apiUrl = "http://localhost:3001/users/"
    
    try {
        
        const respuesta = await fetch( apiUrl,{
           method: "POST",
           headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(objeto)
        })
        const datos = await respuesta.json()
        console.log(datos)
        console.log(`Se agregò usuario`);
    } catch (error) {
        console.error(error);
    }
}
export{Post}