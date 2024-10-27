async function fetchData(){

    try{
        const response = await fetch(`https://bible-api.com/john 3:16`);
        if(!response.ok){
            throw new Error("404 not found");
        }
    
    }catch(error){
        console.error(error);
    }
    
    }
    
    fetchData();