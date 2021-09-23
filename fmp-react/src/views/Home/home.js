import React from "react";
import Stats from "../../components/stats/stats";
import WCard from "../../components/womenCard/wcard";
import LinkList from "../../components/linkList/linkList";
import TextCard from "../../components/textCard/textCard";
import Mireia from "../../assets/images/Mireia-belmonte.jpg";
import Carmen from "../../assets/images/Carmen-martin.jpg";
import Carolina from "../../assets/images/Carolina-marin.jpg";
import Garbine from "../../assets/images/Garbine-muguruza.jpg";
import Lydia from "../../assets/images/Lydia-valentin.jpg";
import Footer from "../../components/footer/footer";
import SkipLink from "../../components/skipLink/skipLink";
import "./home.scss";

const Home = () => {
  const stats = [
    {
      percentage: "45",
      text: "En Noruega el 45% de las deportistas en 2004 había sido víctima de acoso sexual",
      style: "progress-bar1",
    },
    {
      percentage: "55",
      text: "En 2005 el 55% de las deportistas de élite de la República Checa fue víctima de acoso sexual",
      style: "progress-bar2",
    },
    {
      percentage: "34",
      text: "En 2011 en Reino Unido el 34% de mujeres deportitas de todos los niveles sufrió acoso sexual",
      style: "progress-bar3",
    },
  ];
  const sportswomen = [
    {
      name: "Mireia Belmonte",
      expertise: "Natación",
      source: Mireia,
    },
    {
      name: "Carmen Martín",
      expertise: "Balonmano",
      source: Carmen,
    },

    {
      name: "Lydia Valentín",
      expertise: "Halterofilia",
      source: Lydia,
    },
    {
      name: "Garbiñe Muguruza",
      expertise: "Tenis",
      source: Garbine,
    },
    {
      name: "Carolina Marín",
      expertise: "Bádminton",
      source: Carolina,
    },
  ];
  const testimonials = [
    {
      text: "“Había sido mi profesor de natación cuando tenía 17 años. Cuando terminé mi licenciatura en educación física, él era el director de un importante club deportivo y fui a pedirle trabajo. Cuando ya me iba, me empujó con brusquedad contra la pared, agarrando mis pechos con sus manos, mientras me decía: siempre me has gustado mucho... Mantuve la calma y le dije: me sueltas o empiezo a gritar. Me soltó y salí corriendo”.",
      survivor: "Deportista",
      id: 1,
    },
    {
      text: "“Tendríamos quince años... el entrenador nos pegaba un cachete en el culo cuando íbamos a salir al campo a jugar...",
      survivor: "Deportista",
      id: 2,
    },
    {
      text: "“Cuando tenía catorce años el entrenador me llamaba casi todos los días a casa; ahora, después de tantos años, lo pienso y me digo: eso no era normal”",
      survivor: "Deportista",
      id: 3,
    },
  ];
  const links = [
    {
      link: "http://www.inmujer.gob.es/areasTematicas/multiDiscriminacion/mujeresVuln/home.htm",
      name: "Instituto de la mujer",
    },
    {
      link: "http://www.csd.gob.es/csd/estaticos/myd/TRIPTICO_PROTOCOLO.pdf",
      name: "Consejo superior de deportes",
    },
    { link: "http://mujerydeporte.org/w/", name: "Comisión mujer y deporte" },
    {
      link: "https://www.olympic.org/sha?tab=what-is-sha",
      name: "Comité Olímpico Internacional",
    },
    {
      link: "http://ec.europa.eu/assets/eac/sport/events/2013/documents/20131203-gender/final-proposal-1802_en.pdf",
      name: "Comisión europea del deporte",
    },
    {
      link: "http://www.endvawnow.org/es/articles/30-acoso-sexual-en-el-deporte.html",
      name: " ONU Mujeres",
    },
    {
      link: "https://www.womenssportsfoundation.org/",
      name: "Women's sports fundation",
    },
  ];
  const link1= "http://www.fmujeresprogresistas.org";
  const link2= "mailto:mujerydeporte@gmail.com";

  return (
    <>
      <SkipLink />
      <header className="home-header">
        <h1 className="home-header-h1">La desigualdad en el deporte</h1>
      </header>
      <main className="main-section" id="intro">
        <section className="section intro-container">
          <h2 className="intro-title">
            Brecha de género en el ámbito deportivo
          </h2>
          <p>
            El ámbito deportivo es uno de los que cuenta con mayor brecha de
            género, y esta situación se manifiesta, además de en la práctica
            deportiva como tal, en la escasa participación de las mujeres en los
            estamentos técnicos, arbitrales y de gestión. Contribuyen a esta
            desigualdad la socialización distinta que reciben niños y niñas, los
            estereotipos masculinos y femeninos frente a los valores asociados
            al deporte, así como la masculinización de las actividades
            deportivas, la falta de profesionalización del deporte femenino, la
            escasa o nula visibilización del mismo que ofrecen los medios de
            comunicación, etc.
          </p>
          <p>
            La violencia contra las mujeres es una manifestación de esa
            desigualdad estructural entre mujeres y hombres, siendo una de sus
            expresiones el acoso y/o abuso sexual en el deporte.
          </p>
          <p>
            Por dichos motivos hemos creado esta web en la que encontrarás
            ayuda, información, noticias y enlaces de interés. El deporte, por
            su potencialidad educativa, debe constituir un motor de cambio
            social y contribuir a promover la igualdad de mujeres y hombres.
          </p>
        </section>
        <section className="section stats-container">
          <h2 className="stats-title">Estadísticas</h2>
          <Stats items={stats} />
        </section>
        <section className="section topfive-container">
          <h2 className="topfive-title">Top 5</h2>
          <WCard items={sportswomen} />
        </section>
        <section className="section testimonials-container">
          <h2 className="testimonials-title">Testimonios</h2>
          <TextCard items={testimonials} />
        </section>
        <section className="section links-container">
          <h2 className="card-title white">Enlaces de interés</h2>
          <LinkList items={links} />
        </section>
      </main>
      <Footer link1={link1} link2={link2}/>
    </>
  );
};

export default Home;
