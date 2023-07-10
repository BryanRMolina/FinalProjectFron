import "../componentsStyle/HeroStyles.css";
import {Link} from "react-router-dom";

function Hero (props){
    return(
        <>
            <div className={props.cName}>
                <img alt="HerpImg" src= {props.heroImg} />

                <div className="hero-text">
                   
                    <h1> {props.title} </h1>
                    <p>{props.text}</p>
                    <a href={props.url} className = {props.btnClass}>
                        {props.buttonText}
                    </a>

                </div>

            </div>
        </>
    );
}
export default Hero;


/*https://www.shutterstock.com/image-vector/world-blood-donor-day-illustration-600w-2293844851.jpg
https://cdn.pixabay.com/photo/2019/06/27/04/35/organ-donation-4301527_1280.jpg
https://img.freepik.com/foto-gratis/primer-plano-personas-voluntarias-trabajo-equipo-poniendo-dedo-forma-estrellamanos-juntaspila-manosunidad-trabajo-equipo-dia-mundial-medio-ambiente_640221-299.jpg?w=1060&t=st=1687928847~exp=1687929447~hmac=a19b1a01681e2be6ed9f7f6a05522aa14db377c261f171d00e4d58952994b1ec
https://images.pexels.com/photos/4226921/pexels-photo-4226921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 */