function trocarmodo(){
    const html = document.documentElement

   html.classList.toggle('light')

   const imagem = document.querySelector("#profile img")

   if(html.classList.contains('light')){
    imagem.setAttribute('src', 'avatar-light.png')
   }
   else{
    imagem.setAttribute('src','avatar.png')
   }

   if(html.classList.contains('light')){
    imagem.setAttribute('alt','Outra coisa')
   }
   else{
    imagem.setAttribute('alt','Foto de Mayky Brito de óculos e camisa preta, fundo amarelo')
   }
   
}