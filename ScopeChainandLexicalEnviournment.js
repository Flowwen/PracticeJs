function a ()
{
    c();
    function c() {
        var name = 'Atharva Patil';
        d();
        function d() {
            console.log(name);
            logsRandomValue();
        }
    }
}

var name = 'Prathamesh Patil';
function logsRandomValue()
{
    console.log(name);
}

a();