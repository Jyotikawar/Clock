
setInterval(()=>{
    let h = document.querySelector(".hour");
    let m = document.querySelector(".minute");
    let s = document.querySelector(".second");
    // console.log(h);
    // console.log(m);
    // console.log(s);

    time = new Date();
console.log(time);
     hr = time.getHours();
     min = time.getMinutes();
     sec = time.getSeconds();

     hrotation = 30*hr + min/2 ;
     mrotation = 6*min;
     srotation = 6*sec;

    h.style.transform = `rotate(${hrotation}deg)`;
    m.style.transform = `rotate(${mrotation}deg)`;

    s.style.transform = `rotate(${srotation}deg)`;

},1000);

// var time = new Date();
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());