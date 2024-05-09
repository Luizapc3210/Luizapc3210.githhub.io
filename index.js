
document.querySelector("html").addEventListener("click", function(){

});
	
const image = document.querySelector("img");

image.onclick = () => {
	const mySrc = image.getAttribute("src"); //aqui tinha ==
	if (mySrc === "imagens/biblioteca.jpg"){ //aqui tem que comparar o atributo src
		image.setAttribute("src", "imagens/a-rainha-do-nada.jpg");
	} 
	else{
		image.setAttribute("src", "imagens/revolucao(1).jpg");
	}
};

/*const image = document.querySelector("img");

image.onclick = () => {
  const mySrc = image.getAttribute("src");
  if (mySrc === "C:\Users\User\OneDrive\Desktop\Projeto-web\teste-site\imagens\flecha-ico.png") {
    window.location.href = "file:///C:/Users/User/OneDrive/Desktop/Projeto-web/teste-site/html/categoria.html";
  } else {
    image.setAttribute("src", "C:\Users\User\OneDrive\Desktop\Projeto-web\teste-site\imagens\flecha-ico.png");
  }
};*/

/*// Select the image element using a more specific selector
const image = document.querySelector("#myImage");

// Add an event listener to the image element
image.addEventListener("click", () => {
  const currentSrc = image.getAttribute("src");
  const targetSrc = "imagens/flecha-ico.png"; // Use a relative URL or a dynamic approach

  if (currentSrc === targetSrc) {
    window.location.href = "html/categoria.html"; // Use a relative URL
  } else {
    image.setAttribute("src", targetSrc);
  }
});*/
