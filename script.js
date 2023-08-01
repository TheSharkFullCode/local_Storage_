// alert("HELLO")
// localStorage.setItem(“key”, item);
// Este es el método para almacenar información en nuestro localStorage. En el primer parámetro “key” ingresamos el nombre de nuestro elemento, y en el parámetro “item” ingresamos el valor de éste.

// localStorage.setItem(“userID”, 10);
// localStorage.setItem('Juan',name)
// localStorage.setItem(32,edad)
// localStorage.setItem('madrid',city);
// localStorage.getItem(“key”);

// localStorage.setItem('user', JSON.stringify({id: userID, username:name}));
// console.log(`Usuario ${JSON.parse(localStorage.getItem('user')).username} con ID

// Con éste método obtenemos desde el LocalStorage el valor de nuestro elemento, donde “key” es el nombre de éste.
// var userID = localStorage.getItem(“userID”);
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// Ejercicio 1
// Introduce en LocalStorage 3 variables distintas (no en forma de objeto) con tu nombre, edad y ciudad de origen.


let firstname = "oscar"
let edad = 32;
let city ="Madrid";


// 
localStorage.setItem("edad",edad)
localStorage.setItem("city",city)
localStorage.setItem("firstname",firstname);




// Ejercicio 2
// Crea un objeto student con los siguientes campos: firstname, lastname, age, country y courses (array de asignaturas). Guárdalo en localStorage.


let student = {
    firstName: "oscar",
    lastName: "rod",
    age: 25,
    country: "spain",
    courses: ['math', 'physics', 'chemistry']
}
console.log("🚀 ~ file: script.js:48 ~ student:", student)

// const studenJSON = JSON.stringify(student)
localStorage.setItem("student",JSON.stringify(student))
localStorage.getItem(student)
console.log("🚀 ~ file: script.js:52 ~ student:", student)
//primero debes convertir el objeto student a una cadena JSON.tringify(), luego puedes utilizar la funcion localStorage.setItem():

const studenJSON = JSON.stringify(student)
// Ejercicio 3
// Ahora crea un formulario para que el usuario pueda rellenar la información del ejercicio anterior. Cuando se envíe el formulario, se deberá guardar el mismo objeto en localStorage.

const div = document.createElement("div");
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.border = "1px solid blue";
div.style.padding = "10px";
div.style.width = "450px";
div.style.margin = "0 auto";
div.style.height = "300px";

document.body.appendChild(div);

// form.addEventListener('submit', (event) => handleSubmit()); // Añadir el evento de
const form = document.createElement("form");
const labelName = document.createElement("label");
labelName.textContent = "Nombre"
// -----------------------------------
const input = document.createElement("input");
input.type="text";
input.name ="firstName";

const labelApellido = document.createElement("label");
labelApellido.textContent = "Apellido:";
const inputApellido = document.createElement("input");
inputApellido.type = "text";
inputApellido.name = "apellido";
inputApellido.required = true;

const labelEdad = document.createElement("label");
labelEdad.textContent = "Edad"
const inputEdad = document.createElement("input");
inputEdad.type = "number"
inputEdad.name = "edad"
inputEdad.min = "1";
inputEdad.max = "100";

const labelCiudad = document.createElement("label");
labelCiudad.textContent = "Pais";

const inputCiudad = document.createElement("input");
inputCiudad.type = "text";
inputCiudad.name = "ciudad";

const labelCurso = document.createElement("label");
labelCurso.textContent = "Curso"; 

const selectCursos = document.createElement("select")

for (let i=0; i < student.courses.length; i++){
    
    const option =document.createElement("option");
    option.value = student.courses[i];
    option.textContent = student.courses[i];
    selectCursos.appendChild(option) ;   
}
console.log("🚀 ~ file: script.js:104 ~ student:", student)


// console.log('cursos',student.courses, 'curso seleccionado:', selectCursos )

const inputSubmit = document.createElement("input");
inputSubmit.type = "submit";
inputSubmit.style.width = "50px"
inputSubmit.style.marginTop = "10px"

inputSubmit.value="Enviar formulario";

const div3 = document.createElement("div")
div3.id = "progress"
div3.style.border = "1px solid red"


div.appendChild(labelName);
div.appendChild(input);
div.appendChild(labelApellido);
div.appendChild(inputApellido);
div.appendChild(labelEdad);
// div.appendChild(labelEdad);
// div.appendChild(inputEdad);
div.appendChild(inputEdad);
div.appendChild(labelCiudad);
div.appendChild(inputCiudad);
div.appendChild(labelCurso);
// div.appendChild(selectCursos)
div.appendChild(labelCurso);
div.appendChild(selectCursos); 

div.appendChild(inputSubmit);
// div.appendChild(div3);


 

// const studenJSON = JSON.stringify(student)
inputSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    console.log('el formulario se ha enviado');
    // localStorage.setItem("student", studenJSON)

    const data = {
        name: input.value,
        lastName: inputApellido.value,
        age: inputEdad.value,
        city: inputCiudad.value,
        courses: selectCursos.value,
      };
      console.log("🚀 ~ file: script.js:163 ~ inputSubmit.addEventListener ~ data:", data)
      
})


// Bonus Habrás notado que al enviar el formulario se sobrescribe la información que hubiera en localStorage. El reto es lograr quue guarde un array de objetos, de manera que los students se acumulen y no se vayan sobrescribiendo.


