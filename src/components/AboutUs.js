import "../componentsStyle/AboutUsStyles.css";

function AboutUs (){
    return(
        <div className="about-container">

            <h1>Nuestra Historia</h1>

            <div className="NH">
            <p>Somos estudiantes del instituto tecnológico de Santo Domingo. 
            Y debido a la mala organización al momento de donar o solicitar
            pintas de sangre, hemos decidido trabajar en la optimización de
            estos procesos con el propósito de sustituir la página principal 
            de la cruz roja, creando una interfaz más amigable y con funcionalidades 
            que le darían una ventaja significativa a los solicitantes o donantes
            al momento de retirar alguna pinta de sangre. Lo que hace diferente 
            a Gestión Escarlata de las demás aplicaciones web, es el acceso para poder 
            visualizar la cantidad pintas de sangre que hay disponible en las sucursales 
            más cercana.</p>
            </div>

            <h1>Nuestra Misión</h1>

            <div className="NH">
            <p>Tenemos como mision proporcionar suministro seguro y suficiente de sangre, 
            mantener la calidad de la sangre, promover la donación voluntaria de sangre, educacionar 
            y concientizar la sociedad, por ultimo y no menos importante cumplir con las normas y regulaciones 
            para ofrecer el mejor servicio 
            </p>
            </div>


            <h1>Nuestra Visión</h1>

            <div className="NH1">
            <ol>Ser reconocido como líder en la provisión de sangre segura y de alta calidad, contribuyendo de manera significativa a mejorar la salud y salvar vidas en nuestra comunidad y más allá.</ol>
            </div>

        </div>


    )
}

export default  AboutUs;