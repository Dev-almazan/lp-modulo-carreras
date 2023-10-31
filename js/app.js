
        setTimeout(() => {
            document.getElementById("cargando").style.display = "none";

        }, 2000);
        
        let marcaDefault ;
        let img;
        const endoPoint = 'https://aliatuniversidades.com.mx/ONALIAT/API/hubspot/';

        //Verificamos utm si viene de medio pagado google enviar valor a pagina de confirmacion para disparar evento en google
        const ulrparametros = window.location.search;
        const parametros = new URLSearchParams(ulrparametros);
        const utmPerformance = parametros.get("utm_source") ? parametros.get("utm_source") : "default";
        let utmGoogle = "?medio=" + utmPerformance;
                
        const asignacionBackground = (id,img,color)=>{
            document.getElementById(id).style.backgroundImage = "url(" + img + ")";
            document.getElementById(id).style.backgroundColor = color;
        }

            /*Filtrado y asignacion de img y color de acuerdo a marca */

            switch (document.domain) 
            {
                        case 'www.etac.edu.mx':
                            marcaDefaultLps = "ETAC";
                            img = "https://www.aliatuniversidades.com.mx/hubfs/l_etac.svg";
                        break;
                        case 'www.utan.edu.mx':
                    marcaDefaultLps = "UTAN";
                            img = "https://www.aliatuniversidades.com.mx/hubfs/l_utan.svg";
                        break;
                        case 'www.unea.edu.mx':
                    marcaDefaultLps = "UNEA";
                            img = "https://www.aliatuniversidades.com.mx/hubfs/l_unea.svg";
                        break;
                        case 'www.uvg.edu.mx':
                            marcaDefaultLps = "UVG";
                            img = "https://www.aliatuniversidades.com.mx/hubfs/l_uvg.svg";
                        break;
                        case 'www.soycest.mx':
                            marcaDefaultLps = "CEST";
                            img = "https://www.aliatuniversidades.com.mx/hubfs/l_cest.svg";
                        break;
                        case 'www.universidadlaconcordia.edu.mx':
                            marcaDefault = "LA CONCORDIA"
                            img = "https://www.aliatuniversidades.com.mx/hubfs/l_ulc.svg";
                        break;
                        default:
                            marcaDefaultLps = "ETAC";
                            img = "https://www.aliatuniversidades.com.mx/hubfs/l_etac.svg";
                        break;

            }

            document.getElementById("imgNav").src = img;

            

            /*Filtrado y asignacion de img y color de acuerdo a carrera */

            let carreraParamGEt = "";

            let pleca = [
                {
                    slug: "psicologia",
                    img: "https://www.aliatuniversidades.com.mx/hubfs/background-carreras-lps/psicologia.png",
                    color: "#40c1bb"
                },
                {
                    slug: "derecho",
                    img: "",
                    color: "#129447"
                },
                {
                    slug: "criminalistica",
                    img: "",
                    color: "#129447"
                },
                {
                    slug: "industrial",
                    img: "",
                    color: "#00205b"
                },
                {
                    slug: "sistemas",
                    img: "",
                    color: "#00205b"
                },
                {
                    slug: "turistica",
                    img: "",
                    color: "#ff7f61"
                },
                {
                    slug: "pedagogia",
                    img: "",
                    color: "#ffcd00"
                },
                {
                    slug: "educacion",
                    img: "",
                    color: "#ffcd00"
                },
                {
                    slug: "contaduria",
                    img: "",
                    color: "#0047bb"
                },
                {
                    slug: "comercio",
                    img: "",
                    color: "#0047bb"
                },
                {
                    slug: "admininstracion",
                    img: "",
                    color: "#0047bb"
                },
                {
                    slug: "mercadotecnia",
                    img: "",
                    color: "#0047bb"
                },
            ];

            let filtrado = pleca.filter(pleca => pleca.slug.search(carreraParamGEt) !== -1);

            if(filtrado.length > 0 )
            {
                asignacionBackground("inicio", filtrado[0].img, filtrado[0].color)
            }
            else
            {
                asignacionBackground("inicio", pleca[0].img, pleca[0].color)
            }
           
            
         /*Funciones generales */

                    const alertas = (valor, posicion) => {
                        /* Mostramos span con la alerta de la validacion de acuerdo al input */

                        const error = document.getElementsByClassName('error');

                        for (b = 0; b < error.length; b++) {

                            if (error[b] == error[posicion]) {
                                error[posicion].innerHTML = valor;
                            }
                            else {
                                error[b].innerHTML = "";
                            }

                        }

                    }

                    const removerResaltes=()=> {

                        document.querySelectorAll('.inputLp').forEach(function (div) {

                            let element = document.getElementById(div.id);
                            if (element.classList.contains("resaltes")) {
                                element.classList.remove("resaltes")
                            }
                        });

                    }


                    const resaltar=(valor)=> {
                        var element = document.getElementById(valor);
                        element.classList.add("resaltes");
                    }


                    const SubmitForm = (url, datos) => {

                        fetch(url, {
                            method: 'POST',
                            body: JSON.stringify(datos),
                            headers: {
                                'content-type': 'application/json'
                            }
                        }).then((respuesta) => {

                            if (respuesta.status == 200) {

                                let gracias ="";

                                switch (datos.marca) {

                                    case 'ETAC':
                                        gracias = "https://www.etac.edu.mx/typ/gracias-por-registrarte";
                                        break;
                                    case 'UTAN':
                                        gracias = "https://www.utan.edu.mx/typ/gracias-por-registrarte";
                                        break;
                                    case 'UNEA':
                                        gracias = "https://www.unea.edu.mx/typ/gracias-por-registrarte";
                                        break;
                                    case 'UVG':
                                        gracias = "https://www.uvg.edu.mx/typ/gracias-por-registrarte";
                                        break;
                                    case 'CEST':
                                        gracias = "https://www.soycest.mx/typ/gracias-por-registrarte";
                                        break;
                                    case 'CONCORDIA':
                                        gracias = "https://www.universidadlaconcordia.edu.mx/typ/gracias-por-registrarte";
                                    break;

                                }


                                window.location.href = gracias + utmGoogle;

                            }
                            else {
                                console.log(respuesta.ok);
                                console.log(respuesta.status);
                                respuesta.json().then((data) => {

                                    console.log(data);
                                });
                            }

                        })
                            .catch((error) => {

                                console.log(error);

                            });


                    }

        /*Eventos del DOM */

        document.getElementById('formSubmitLp').addEventListener('submit',(e) =>{

            e.preventDefault();

            removerResaltes();


            let nombre = document.getElementById('name').value;
            let correo = document.getElementById('email').value;
            let telefono = document.getElementById('phone').value;


            let excorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,6})+$/;
            let numeros = /^([0-9 ])+$/;
            let letras = /^([á-ú-Á-Ú-a-z-A-Z-ñ ._])+$/;


            if (nombre.length > 55 || letras.test(nombre) === false || nombre.length == 0) {

                resaltar("name")
                alertas("Por favor ingresa tú nombre completo", 0);
            }
            else if (correo.length > 55 || excorreo.test(correo) === false || correo.length == 0) {

                resaltar("email")
                alertas("Por favor ingresa tú correo electrónico", 1);
            }
            else if (telefono.length != 10 || numeros.test(telefono) === false || telefono.length == 0) {

                resaltar("phone")
                alertas("Por favor ingresa número de teléfono - 10 digítos.", 2);

            }
            else 
            {

                
                alertas("", 0);
                
                SubmitForm(endoPoint, {
                    key: 'ALIAT-162098695936825',
                    marca: marcaDefaultLps,
                    medio: 'landing-carreras',
                    nombre: nombre,
                    correo: correo,
                    telefono: telefono,
                    categoria: "Licenciatura",
                    carrera: "Derecho",
                    campus: "Virtual",
                    modalidad: "Virtual",
                    pageid: "142971712774"
                });


            }

        })