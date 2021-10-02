var loadFile = (event) => {
	let image = document.getElementById('photo');
	image.src = URL.createObjectURL(event.target.files[0]);
};

var loadName = (event) => {
    let name = document.getElementById("name");
    name.innerHTML = event.target.value;
}




const downloadImg = () =>{
    var card = document.getElementById("card");
    var val = document.getElementById("name").innerHTML;
    
    html2canvas(card,{
        scale:1.1,
      backgroundColor:"rgba(0,0,0,0)" 
      
    }).then(function(canvas) {
		
        var imgLink = document.createElement("a");
        document.body.appendChild(imgLink);
        imgLink.download = `${val}.png`;
        imgLink.href = canvas.toDataURL("image/png");
        imgLink.target = '_blank';
        imgLink.click();
    });
}


