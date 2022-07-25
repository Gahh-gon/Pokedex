const namePoke = document.querySelector('.pokemon_name');
const numerPoke = document.querySelector('.pokemon_number');
const imgPoke = document.querySelector('.pokemom_img');
const formPokemo = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector(' .btn-prev');
const buttonNext = document.querySelector(' .btn-next');
const buttonEnvolutio = document.querySelector('.btn-envolutio');
const tipoPoke1 = document.querySelector('.pokemon_tipo01');
const tipoPoke2 = document.querySelector('.pokemon_tipo02')
var buscarPoke = 1;








const requerer = async (pokemon) =>{

   const requererApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if(requererApi.status === 200){

 const dados  =  await requererApi.json();
 
 return dados;
  }

}



const puxado  =  async (pokemon) => {
namePoke.innerHTML = 'loading...';
numerPoke.innerHTML = '';
tipoPoke1.innerHTML = '';
tipoPoke2.innerHTML = '';
    const dados =  await requerer(pokemon);

if(dados){

    imgPoke.style.display = 'block';
    namePoke.innerHTML = dados.name;
    numerPoke.innerHTML = dados.id
    imgPoke.src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    tipoPoke1.innerHTML =  dados['types']['0']['type']['name'];
    tipoPoke2.innerHTML  =  dados['types']['1']['type']['name'];
  
      
    
    buscarPoke = dados.id; 
}else{
    namePoke.innerHTML = 'could not locate';
    numerPoke.innerHTML = '{ERRO}'
    imgPoke.style.display = 'none'
    
  }

 
   

  
}


formPokemo.addEventListener('submit', (event) => {
event.preventDefault();
puxado(input.value.toLowerCase());
input.value = '';
})


buttonPrev.addEventListener('click', () => {
 if(buscarPoke > 1 ) {

  buscarPoke -= 1;
  puxado(buscarPoke);
 } 


    })

    buttonNext.addEventListener('click', () => {
   
        buscarPoke +=1
        puxado(buscarPoke);

          })

        

    

puxado(buscarPoke)