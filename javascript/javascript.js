// Arrays

const recomendados = [
    {
      id: 1,
      nombre: "Bar Italia",
      descripcion: "Av. Italia 1423, Providencia",
      img:
        "https://cdn.londonandpartners.com/asset/bar-italia-soho-d24cbb4f44d03c7ae68b87e94d3dd337.jpg",
      text:
        "El primer restaurante gluten free de Chile.",
    },
    {
      id: 2,
      nombre: "De Mi Tierra",
      descripcion: "Nueva De Lyon 136, Providencia",
      img:
        "https://www.portallyonprovidencia.cl/web/wp-content/uploads/2019/08/20-1200x600.jpg",
      text:
        "Celíacos, vegetarianos, libre de azúcar e intolerantes a la lactosa.",
    },
    {
      id: 3,
      nombre: "Alhas Gluten Free",
      descripcion: "Av. Condell 1145, Providencia",
      img:
        "https://tofuu.getjusto.com/orioneat-local/resized2/WAfhuTD85uemp8XjK-x-500.webp",
      text:
        "Alimentos sin gluten de calidad premium a precios convenientes. Pizza, sushi y más.",
    },
    {
      id: 4,
      nombre: "Wonderland Café",
      descripcion: "Rosal 361, Santiago",
      img: "https://res.cloudinary.com/civico/image/upload/c_fit,f_auto,fl_lossy,h_1200,q_auto:low,w_1200/v1501913750/entity/image/file/050/001/598562969d268314e8001050.jpg",
      text: "Un oasis de calma lleno de rincones acogedores en donde se resalta la belleza patrimonial de nuestro querido barrio Lastarria.",
    },
    {
        id: 5,
        nombre: "Gelatería Firenze",
        descripcion: "Avenida Condell 1145, Providencia",
        img: "https://chefandhotel.cl/media/zoo/images/Gelateria-Firenze-chefandhotel-PRINCIPAL-INTERIOR_bfd557aa68c8102e5859ce1e00e21f43.jpg",
        text: "Disfruta de los mejores helados artesanales libres de gluten.",
    },
    {
        id: 6,
        nombre: "Zöliakie Kaffee",
        descripcion: "Avenida Providencia 2546, Providencia",
        img: "https://res.cloudinary.com/civico/image/upload/c_fit,f_auto,fl_lossy,h_1200,q_auto:low,w_1200/v1499629278/entity/image/file/4ca/000/596286dd2f41f3e3cb0004ca.jpg",
        text: "Primera cafetería 100% libre de gluten en Santiago.",
    },
    {
        id: 7,
        nombre: "Café Doppio",
        descripcion: "Avenida Ricardo Lyon 232, Providencia",
        img: "https://tofuu.getjusto.com/orioneat-prod/ggPx3vp2kfsAaq3TF-20200210_193728-01.jpg",
        text: "Café de grano, helados artesanales, postres, almuerzos.",
    },
    {
        id: 8,
        nombre: "Filomena Café",
        descripcion: "Avenida José Miguel Claro 2109, Ñuñoa",
        img: "https://finde.latercera.com/wp-content/uploads/2018/10/Filomena-6-OK.jpg",
        text: "Menú diario, sándwiches, pasteles, helados y más.",
    },
  ];

const img = document.getElementById("local-img");
const nombre = document.getElementById("nombre");
const descripcion = document.getElementById("descripcion");
const info = document.getElementById("info");
  
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Ítem con el cual iniciará

let currentItem = 0;
  
// Cargar ítem inicial

    window.addEventListener("DOMContentLoaded", function () {
      const item = recomendados[currentItem];
      img.src = item.img;
      nombre.textContent = item.nombre;
      descripcion.textContent = item.descripcion;
      info.textContent = item.text;
    });

// Presentar ítem
    
  function showLocal(local) {
    const item = recomendados[local];
    img.src = item.img;
    nombre.textContent = item.nombre;
    descripcion.textContent = item.descripcion;
    info.textContent = item.text;
  }

// Que le aparezca otro ítem al apretar el botón de siguiente

  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > recomendados.length - 1) {
      currentItem = 0;
    }
    showLocal(currentItem);
  });

// Que pueda ir hacia atrás con el botón de anterior

  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = recomendados.length - 1;
    }
    showLocal(currentItem);
  });

// Agregar evento nuevo
// Botón que recomiende un local al azar con sólo apretarlo

randomBtn.addEventListener("click", function () {
    console.log("hello");
    currentItem = Math.floor(Math.random() * recomendados.length);
    showLocal(currentItem);
  });

// Carrusel

var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num) {
    displaySlides(currentIndex += num);
}

function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}

// DOM
// Informar sobre actualización

document.getElementById("actualizacion").innerHTML = document.lastModified;

const btn = document.getElementById('btn');

// DOM
// Cambiar texto del botón y su color de fondo tras clickearlo

randomBtn.addEventListener('click', function handleClick() {
  const initialText = '';

  randomBtn.innerHTML = '<span style="background-color: salmon">¡Buena elección! :)<span>';
})

// Probando LocalStorage

function mySave(){
  var miContenido = document.getElementById("usuariorecomienda").value;
  localStorage.setItem("miContenido", miContenido);
}

function myLoad(){
  var miContenido = localStorage.getItem("miContenido");
  document.getElementById("usuariorecomienda").value = miContenido;
}
