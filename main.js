var loadFile = (event) => {
	let image = document.getElementById('photo');
	image.src = URL.createObjectURL(event.target.files[0]);
};

var loadName = (event) => {
    let name = document.getElementById("name");
    name.innerHTML = event.target.value;
}

const btn = document.getElementById("card");
var getCanvas;

const downloadImg = () =>{
    var card = document.getElementById("card");
    var val = document.getElementById("name").innerHTML;
    
    

    html2canvas(card).then(function(canvas) {
		
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = `${val}.png`;
        link.href = canvas.toDataURL("image/png");
        link.target = '_blank';
        link.click();
    });
}


