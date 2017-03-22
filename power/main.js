var img, txt;
window.onload = function(){
    document.getElementById('slideImg').src= "img/apollo-rover.jpg";
    img = document.getElementById('slideImg');
    txt = document.getElementById('slideDesc');
}
var i = 0;
function left(id){
    //console.log(id);
    if(i==0){i=2}else{i--}
    imageS();
}   
function right(id){
    //console.log(id);
    if(i==2){i=0}else{i++}
    imageS();
}

function imageS(){
    switch(i){
        case 0:
            img.src= "img/apollo-rover.jpg";  
            txt.innerHTML = 'Apollo 17 Commander Eugene Cernan took the Lunar Roving Vehicle on a checkout drive during the early part of the first extravehicular activity at the Taurus-Littrow landing site. This view of the “stripped down” rover was taken before the astronauts loaded it with equipment for lunar exploration including the ground controlled television assembly; the lunar communications relay unit, the hi-gain antenna, the low-gain antenna, aft tool pallet, and lunar tools and scientific gear. The mountain in the right background is the east end of South Massif. The Boeing Company working with of NASA Marshall Space Flight Center designed the rover to be lightweight yet strong enough to carry as much equipment as possible.';
            break;
        case 1:
            img.src= "img/apollo-rock.jpg";  
            txt.innerHTML = 'Geologist-Astronaut Harrison Schmitt worked next to a huge, split boulder at geology Station 6 on the sloping base of North Massif during the third Apollo 17 extravehicular activity. The lunar rover developed by NASA’s Marshall Space Flight Center in Huntsville, Ala. operated fine in this rough lunar terrain.';
            break;
        case 2:
            img.src= "img/apollo-rake.jpg";  
            txt.innerHTML = 'Geologist-Astronaut Harrison Schmitt retrieved lunar samples with an adjustable sampling scoop during the second extravehicular activity at Station 5 at the Taurus-Littrow landing site. Schmitt and fellow lunar explorer, Commander Eugene Cernan set up nine geology stations on the moon. During three lunar excursions, they drove the rover between sites to collect samples and monitor data on instruments. The lunar roving vehicle was developed by NASA’s Marshall Space Flight Center in Huntsville, Ala.';
            break;
    }
}
