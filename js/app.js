
        let marcaDefault ;
        let img;
        const url = 'https://aliatuniversidades.com.mx/ONALIAT/API/hubspot/';
        
            setTimeout(() => {
                document.getElementById("cargando").style.display = "none";
                
            }, 2000);


        /*Funciones generales */
            switch (document.domain) 
            {
                        case 'www.etac.edu.mx':
                            marcaDefault = "ETAC";
                            img = "https://www.aliatuniversidades.com.mx/hubfs/l_etac.svg";
                        break;
                        case 'www.utan.edu.mx':
                            marcaDefault = "UTAN";
                            img = "https://www.aliatuniversidades.com.mx/hubfs/l_utan.svg";
                        break;
                        case 'www.unea.edu.mx':
                            marcaDefault = "UNEA";
                            img = "https://www.aliatuniversidades.com.mx/hubfs/l_unea.svg";
                        break;
                        case 'www.uvg.edu.mx':
                            marcaDefault = "UVG";
                            img = "https://www.aliatuniversidades.com.mx/hubfs/l_uvg.svg";
                        break;
                        case 'www.soycest.mx':
                            marcaDefault = "CEST";
                            img = "https://www.aliatuniversidades.com.mx/hubfs/l_cest.svg";
                        break;
                        case 'www.universidadlaconcordia.edu.mx':
                            marcaDefault = "LA CONCORDIA"
                            img = "https://www.aliatuniversidades.com.mx/hubfs/l_ulc.svg";
                        break;
                        default:
                            marcaDefault = "ETAC";
                            img = "https://www.aliatuniversidades.com.mx/hubfs/l_etac.svg";
                        break;

            }

            document.getElementById("imgNav").src = img;

    