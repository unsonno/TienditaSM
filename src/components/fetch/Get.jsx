async function Get() {

     const apiUrl = "http://localhost:3001/users/"
    
    try {
        const response = await fetch(apiUrl)
        let userList =await response.json()
        return userList

    } catch (error) {
        console.log(error)
    }

};
export {Get}