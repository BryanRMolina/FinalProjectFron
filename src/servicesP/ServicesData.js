import { Link } from "react-router-dom";
import "./ServicesSDS.css";
import ServicesSData from "./ServicesSData.js";
import card1 from "../assents/DonarSangre.jpg"
import card2 from "../assents/PintadeSangre.jpg"
import card3 from "../assents/GoogleMaps.jpg"
import HeroService from "../DirServices/HeroServices.js"

function ServicesData() {
    return (
        <div className="circle">
            <h1>Servicios disponibles</h1>
            <p1>Nos enfocamos en ofrecerte la mejor clase de servicio</p1>
            <div className="circlecard">
                <ServicesSData
                    image={card1}
                    heading="Donar pinta de Sangre"
                    text={
                        <>
                            Como usuario registrado, tienes la posibilidad de agendar una cita para donar pintas de sangre de la manera más rapida y segura.  
                            <HeroService 
                                buttonText = "Donar"
                                url = "/citas"
                                btnClass = "DonarTest"
                            />
                        </>
                    }
                />
                
                <ServicesSData
                    image={card2}
                    heading="Solicitar pinta de Sangre"
                    text={
                        <>
                            Si necesitas pintas de sangre, no dudes en solicitarla, nosotros somos tu opción #1.  
                            <HeroService 
                                buttonText = "Solicitar"
                                url = "/compras"
                                btnClass = "DonarTest"
                            />
                        </>
                    }
                />

                <ServicesSData
                    image={card3}
                    heading="Vizualizar los bancos más cercanos"
                    text={
                        <>
                            Unica plataforma que te permite vizualisar los bancos de sangre más cercanos a tu ubicación.  
                            <HeroService 
                                buttonText = "Bancos de Sangre"
                                url = "/maps"
                                btnClass = "DonarTest"
                            />                        </>
                    }
                />
                
            </div>
        </div>
    )
}

export default ServicesData;
