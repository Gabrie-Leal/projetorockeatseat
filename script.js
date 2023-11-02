function trocarmodo(){
    const html = document.documentElement

   html.classList.toggle('light')

   const imagem = document.querySelector("#profile img")

   if(html.classList.contains('light')){
    imagem.setAttribute('src', 'perfilbranco.jpg')
   }
   else{
    imagem.setAttribute('src','Perfil.jpg')
   }

   if(html.classList.contains('light')){
    imagem.setAttribute('alt','Foto de Gabriel Leal, no ano novo')
   }
   else{
    imagem.setAttribute('alt','Foto de Gabriel Leal tímido')
   }
   
}