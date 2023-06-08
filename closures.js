function outter ()
{
    var a = 100;

    function inner(){ //closure formed
        var b = 100;

        function innermost(){ //closure formed
            console.log(a,b); 
        }

        innermost();
    }
  return inner;

}


var result = outter();

result();