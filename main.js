let downloadBtn=document.getElementsByClassName('download-btn')[0]
var loadFile = (event) => {
	let image = document.getElementById('photo');
	image.src = URL.createObjectURL(event.target.files[0]);
    downloadBtn.style.display="inline-block"
};

var loadName = (event) => {
    let name = document.getElementById("name");
    name.innerHTML = event.target.value;
}

var darkMode=()=>{
    let body=document.querySelector('body')
    let dark=document.querySelector('.darkMode-toggle')
    body.classList.toggle('body-darkMode')
    if (body.classList.contains('body-darkMode')) {
        dark.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="12" cy="12" r="4" />
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
      </svg>`
    }
    else{
        dark.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
      </svg>`
    }
}



const downloadImg = () =>{
    var card = document.getElementById("card");
    var val = document.getElementById("name").innerHTML;
    
    html2canvas(card,{
        scale:1.1,
    }).then(function(canvas) {
		
        var imgLink = document.createElement("a");
        document.body.appendChild(imgLink);
        imgLink.download = `${val}.png`;
        imgLink.href = canvas.toDataURL("image/png");
        imgLink.target = '_blank';
        imgLink.click();
    });
}


