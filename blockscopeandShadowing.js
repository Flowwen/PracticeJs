let a = 10;

//block 
{
    // let a = 100; //shadowing
    var b = 10;
    const c = 1000; 
    console.log(a);
    console.log(b);
    console.log(c);

    {
        // let a = 1000; 

        console.log(a);
    }

}

console.log(a);