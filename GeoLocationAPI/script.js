navigator.geolocation.getCurrentPosition(
    function(position){
        console.log(position);
    },
function(){
    alert(`could not get position.`);
}

);
