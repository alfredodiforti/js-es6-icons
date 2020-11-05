$(document).ready( () => {
        const icons = [
            {
                name: 'cat',
                prefix: 'fa-',
                type: 'animal',
                family: 'fas',
            },
            {
                name: 'crow',
                prefix: 'fa-',
                type: 'animal',
                family: 'fas',
            },
            {
                name: 'dog',
                prefix: 'fa-',
                type: 'animal',
                family: 'fas',
            },
            {
                name: 'dove',
                prefix: 'fa-',
                type: 'animal',
                family: 'fas',
            },
            {
                name: 'dragon',
                prefix: 'fa-',
                type: 'animal',
                family: 'fas',
            },
            {
                name: 'horse',
                prefix: 'fa-',
                type: 'animal',
                family: 'fas',
            },
            {
                name: 'hippo',
                prefix: 'fa-',
                type: 'animal',
                family: 'fas',
            },
            {
                name: 'fish',
                prefix: 'fa-',
                type: 'animal',
                family: 'fas',
            },
            {
                name: 'carrot',
                prefix: 'fa-',
                type: 'vegetable',
                family: 'fas',
            },
            {
                name: 'apple-alt',
                prefix: 'fa-',
                type: 'vegetable',
                family: 'fas',
            },
            {
                name: 'lemon',
                prefix: 'fa-',
                type: 'vegetable',
                family: 'fas',
            },
            {
                name: 'pepper-hot',
                prefix: 'fa-',
                type: 'vegetable',
                family: 'fas',
            },
            {
                name: 'user-astronaut',
                prefix: 'fa-',
                type: 'user',
                family: 'fas',
            },
            {
                name: 'user-graduate',
                prefix: 'fa-',
                type: 'user',
                family: 'fas',
            },
            {
                name: 'user-ninja',
                prefix: 'fa-',
                type: 'user',
                family: 'fas',
            },
            {
                name: 'user-secret',
                prefix: 'fa-',
                type: 'user',
                family: 'fas',
            },
        ];
//creo un array di colori 
        const colori = [ 'blue', 'orange', 'purple'];
//prendo referenze 
//riferimento del main nel dom 
    const referenzadom = $('.primary');
//stampare le icone a schermo creando una funzione che lo fa

//stampaicone a colori con funzione 
    const stampaiconecolorate = coloraicone(icons,colori);
    stampaicone(stampaiconecolorate, referenzadom);
    console.log(stampaiconecolorate);

//filter icon
    const selezione = $('#type');
    const types = getype(icons);
//gen option
    genOption(types, selezione);
//event
    selezione.change(() => {
    const selected = selezione.val();
    console.log(selected); 

    const filteredicon = filtericon(stampaiconecolorate, selected);
    stampaicone(filteredicon, referenzadom);
})


//SEZIONE DEDICATA ALLE FUNZIONI PRESENTI NEL JS
//FUNZIONE STAMPA ICONE

function stampaicone (icons,container) {   
    container.html('');

     icons.forEach(element => {
        const {family, prefix, name, colori, } = element;

        const html = `<div class="icon">
        <i class="${family} ${prefix}${name}"
        style="color: ${colori}"></i>  
        <div class="gender">${name}</div>
    </div>`;

    container.append(html);
     });
}
//FUNZIONE COLORA ICONE
function coloraicone (icons,colori) {
    //FUNZIONE INTERNA PER OTTENERE IL TYPE
    const types = getype(icons);
//assegna colore icone 
    const stampaiconecolorate  = icons.map((element)=> {
        const indexType = types.indexOf(element.type);
        return {
            ...element,
            colori: colori[indexType]
        };

    });
    return stampaiconecolorate;
}

//FUNZIONE PER OTTENERE IL TYPE
function getype(icons) { 
    const types = [];

    icons.forEach((element) => {
        if(!types.includes(element.type)) {
           types.push(element.type);
        }
    });
    return types ; 
    
} 
//gen option
function genOption(types, select) {
    types.forEach((element)=>{
        select.append(`<option value="${element}">${element}</option>`)
    })
}
//filter icon
function filtericon(stampaiconecolorate, selezione ) {
    if (selezione === 'all' ) {
        return stampaiconecolorate; 
    } 
    const filtered = stampaiconecolorate.filter((element)=> {

        return element.type === selezione;
    })
    return filtered ;
}



 })
