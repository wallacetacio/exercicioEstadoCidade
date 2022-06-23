const regiao = {
   Parana: {
       nome: 'Paraná',
       cidades: ['Curitiba', 'Cascavel', 'Maringá'],
       sigla: 'PR'
   },

   SantaCatarina: {
       nome: 'Santa Catarina',
       cidades: ['Florianópolis', 'Blumenau', 'Lages'],
       sigla: 'SC'
   },

   RioGrandeDoSul: {
       nome: 'Rio Grande do Sul',
       cidades: ['Porto Alegre', 'Gramado', 'Caxias do Sul'],
       sigla: 'RS'
   }
}
const listaEstados = document.querySelector('#estados');
const cidades = document.getElementById('cidades');
const menssagem = document.getElementById('mes');
let stateSelected;
let citySelected;
let sigla;

listaEstados.addEventListener('change', (event) => {
   stateSelected = event.target.value

   if (stateSelected === '01') {
       cidades.removeAttribute('disabled');
       sigla = regiao.Parana.sigla;
       cidades.innerHTML = `
       <option>--Selecione--</option>
       <option value="c1" id="${regiao.Parana.cidades[0]}">
       ${regiao.Parana.cidades[0]}
       </option>
       <option value="c2" id="${regiao.Parana.cidades[1]}">
       ${regiao.Parana.cidades[1]}
       </option>
       <option value="c3" id="${regiao.Parana.cidades[2]}">
       ${regiao.Parana.cidades[2]}
       </option>

       `} else if (stateSelected === '02') {
       cidades.removeAttribute('disabled');
       cidades.innerHTML = `
           <option>--Selecione--</option>
           <option value="c4" id="${regiao.SantaCatarina.cidades[0]}">
           ${regiao.SantaCatarina.cidades[0]}
           </option>
           <option value="c5" id="${regiao.SantaCatarina.cidades[1]}">
           ${regiao.SantaCatarina.cidades[1]}
           </option>
           <option value="c6" id="${regiao.SantaCatarina.cidades[2]}">
           ${regiao.SantaCatarina.cidades[2]}
           </option>

           `} else if (stateSelected === '03') {
       cidades.removeAttribute('disabled');
       cidades.innerHTML = `
               <option>--Selecione--</option>
               <option value="c7" id="${regiao.RioGrandeDoSul.cidades[0]}">
               ${regiao.RioGrandeDoSul.cidades[0]}
               </option>
               <option value="c8" id="${regiao.RioGrandeDoSul.cidades[1]}">
               ${regiao.RioGrandeDoSul.cidades[1]}
               </option>
               <option value="c9" id="${regiao.RioGrandeDoSul.cidades[2]}">
               ${regiao.RioGrandeDoSul.cidades[2]}
               </option>
               `} else {
       cidades.setAttribute('disabled', 'disabled');
   }

   cidades.addEventListener('change', (event) => {

       citySelected = event.target.value;

       if (citySelected === 'c1') {
           menssagem.innerHTML = '';
           menssagem.insertAdjacentHTML("beforeend", `
                   <h3>${regiao.Parana.cidades[0]}/${regiao.Parana.sigla}</h3>
                   `);

       } else if (citySelected === 'c2') {
           menssagem.innerHTML = '';
           menssagem.insertAdjacentHTML("beforeend", `
                   <h3>${regiao.Parana.cidades[1]}/${regiao.Parana.sigla}</h3>
                   `);

       } else if (citySelected === 'c3') {
           menssagem.innerHTML = '';
           menssagem.insertAdjacentHTML("beforeend", `
                   <h3>${regiao.Parana.cidades[2]}/${regiao.Parana.sigla}</h3>
                   `);

       } else if (citySelected === 'c4') {
           menssagem.innerHTML = '';
           menssagem.insertAdjacentHTML("beforeend", `
                   <h3>${regiao.SantaCatarina.cidades[0]}/${regiao.SantaCatarina.sigla}</h3>
                   `);

       } else if (citySelected === 'c5') {
           menssagem.innerHTML = '';
           menssagem.insertAdjacentHTML("beforeend", `
                   <h3>${regiao.SantaCatarina.cidades[1]}/${regiao.SantaCatarina.sigla}</h3>
                   `);

       } else if (citySelected === 'c6') {
           menssagem.innerHTML = '';
           menssagem.insertAdjacentHTML("beforeend", `
                   <h3>${regiao.SantaCatarina.cidades[2]}/${regiao.SantaCatarina.sigla}</h3>
                   `);

       } else if (citySelected === 'c7') {
           menssagem.innerHTML = '';
           menssagem.insertAdjacentHTML("beforeend", `
                   <h3>${regiao.RioGrandeDoSul.cidades[0]}/${regiao.RioGrandeDoSul.sigla}</h3>
                   `);

       } else if (citySelected === 'c8') {
           menssagem.innerHTML = '';
           menssagem.insertAdjacentHTML("beforeend", `
                   <h3>${regiao.RioGrandeDoSul.cidades[1]}/${regiao.RioGrandeDoSul.sigla}</h3>
                   `);

       } else if (citySelected === 'c9') {
           menssagem.innerHTML = '';
           menssagem.insertAdjacentHTML("beforeend", `
                   <h3>${regiao.RioGrandeDoSul.cidades[2]}/${regiao.RioGrandeDoSul.sigla}</h3>
                   `);

       } else if (stateSelected === "00") {
           menssagem.innerHTML = '';
       }
   });
});