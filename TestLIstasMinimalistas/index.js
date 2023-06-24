const Price = () => {
    //   Contiene Informacion de los items
    const listaInfoItems = [
      {
        item: "item1",
        descripcion:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque sint consequatur reprehenderit suscipit.",
        costo: `100`
      },
      {
        item: "item2",
        descripcion:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque sint consequatur reprehenderit suscipit.Doloremque sint consequatur",
        costo: `50`
      },
      {
        item: "item2",
        descripcion: "Doloremque sint consequatur reprehenderit suscipit",
        costo: `23`
      },
      {
        item: "item2",
        descripcion:
          "sit amet consectetur adipisicing elit. Doloremque sint consequatur reprehenderit suscipit.",
        costo: `31`
      },
      {
        item: "item2",
        descripcion: "sit amet consectetur adipisicing elit",
        costo: `9`
      }
    ];


    // Agregamos una variable para identificar los enlaces.
    const enlaces = document.querySelectorAll('.listaTienda__link');
    const enlacesList = [];
    // Creamos el div dle pop out
    const popout = document.createElement('div')
    const li = document.querySelectorAll(".listaTienda__item");
    // For obtenemos el index de los Enlaces
    for(let index = 0; index<enlaces.length; index++){  
        //Guardo los enlaces en un array
        enlacesList.push(enlaces[index])
        // Agrego a todos los enlaces la funcion addEventListener - Escucha si entro a un item
        enlaces[index].addEventListener('mouseover', (e) =>{
          let itemSelf = e.target;

          // Obtenemos el costo Individual de los items - console.log(listaInfoItems[index].costo);
          enlaces[index].appendChild(popout);
          popout.setAttribute('class', 'link__popout--active');
          popout.innerHTML = '$' + listaInfoItems[index].costo;
        })

        enlaces[index].addEventListener('mouseout', (e)=>{
          popout.setAttribute('class','link__popout--desactivate');
            // enlaces[index].removeChild(popout);
        
        })
    }



    console.log(enlacesList);


    // console.log(listaInfoItems[2].costo); - Asi obtenemos la info Individual - 



    
    // enlaces.addEventListener("mouseover", (e)=>{
      
    // })

    
        

  };
  
  Price();
  