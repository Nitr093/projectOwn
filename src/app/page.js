import Image from "next/image";
import styles from "./page.module.css";
import "@/styles/configuracion.css"

export default function Home() {
  return (
    <div>
      <main>
        <div id="fondo-main">
            <h2>Noticias <i className="fa-solid fa-newspaper"></i></h2>
        </div>
        <div className="cuerpo-main">
            <a
                href="https://www.xataka.com/robotica-e-ia/alibaba-quiere-ser-nueva-deepseek-asegura-tener-metodo-entrenamiento-para-su-ia-88-barato">
                <img src="https://www.michaelpage.com.au/sites/michaelpage.com.au/files/2022-01/Software%20Developer.jpg"
                    alt="Imagen de ejemplo" />
                <div className="texto-con-fondo">
                    <h3>Alibaba quiere ser la nueva DeepSeek: asegura tener un
                        método de
                        entrenamiento para su IA un 88% más barato</h3>
                    <p>La estrategia que han ideado los ingenieros de Alibaba
                        para reducir el
                        coste del entrenamiento de sus modelos de IA es ingeniosa. </p>
                </div>
            </a>
        </div>
        <div className="cuerpo-main">
            <a
                href="https://www.xataka.com/empresas-y-economia/ibm-despidio-a-casi-8-000-trabajadores-para-remplazarlos-ia-consecuencia-ahora-tiene-trabajadores-que-nunca">
                <img src="https://i.blogs.es/a47581/1200_800/1200_800.jpeg" alt="Imagen de ejemplo" />
                <div className="texto-con-fondo">
                    <h3>IBM despidió a 8.000 trabajadores para reemplazarlos por la IA. Lo que no
                        esperaba fue contratar a otros tantos... por la IA</h3>
                    <p>IBM es una compañía que tiene clarísima su postura con la IA. Y le está
                        siendo más que rentable. </p>
                </div>

            </a>
        </div>
        <div className="cuerpo-main">
            <a
                href="https://www.3djuegos.com/3djuegos-trivia/noticias/bill-gates-ha-declarado-guerra-a-elon-musk-promete-gastar-toda-su-fortuna-ver-amenazado-su-trabajo-batalla-que-viene-lejos?utm_source=xataka&utm_medium=network&utm_campaign=editorial_recommendation_section">
                <img src="https://i.blogs.es/c44f8c/musk-gates/1200_800.jpeg" alt="Imagen de ejemplo" />
                <div className="texto-con-fondo">
                    <h3>Bill Gates ha declarado la guerra a Elon Musk y promete gastar toda su
                        fortuna tras ver amenazado su trabajo. Es una batalla que viene de lejos</h3>
                    <p >Gates promete invertir 200.000 millones para no ver socavado el trabajo
                        de su fundación. </p>
                </div>

            </a>
        </div>
        <div className="cuerpo-main">
            <a href="https://www.xataka.com/robotica-e-ia/gemini-no-deberia-llamarse-gemini-deberia-llamarse-google">
                <img src="https://i.blogs.es/ac8442/photo-1740393068164-9605d878442c/1200_800.jpeg"
                    alt="Imagen de ejemplo" />
                <div className="texto-con-fondo">
                    <h3 >Gemini no debería llamarse Gemini. Debería llamarse Google</h3>
                    <p>Idea loca: Google debería priorizar las búsquedas con IA y convertir a
                        su buscador tradicional en un modo secundario con el nombre "Google Classic". </p>
                </div>

            </a>
        </div>
    </main>
      
    </div>
  );
}
