// closur 

const greet = (name) => {

    const welcome = () => {

        console.log(`hello ${name}`); 
    }
     
    return welcome; 
}

const app = greet("gulshan");


app()