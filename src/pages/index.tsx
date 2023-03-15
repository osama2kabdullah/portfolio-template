import * as React from "react";
import { graphql, HeadFC, Link, PageProps, useStaticQuery } from "gatsby";
import "../styles/main.scss";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import NavBar from "../component/NavBar.tsx"

const IndexPage: React.FC<PageProps> = () => {

  const [audioPlay, setAudioPlay] = React.useState(false);    
  const toggleAudio = () => {
    setAudioPlay(!audioPlay);
  };

const birthdate = new Date(2001, 10, 25);  // months are zero-indexed, so 10 represents November
const now = new Date();
const diff = now.getTime() - birthdate.getTime();  // get difference between now and birthdate in milliseconds
const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));  // convert milliseconds to years (taking leap years into account)
  
  const tableData = [
    { title: "Name", value: "Md. Abdullah" },
    { title: "Address", value: "Shiromoni, Phultola, Khulna, Bangladesh" },
    { title: "Email", value: "abdullah21673@gotmal.com" },
    { title: "Age", value: age },
    { title: "Profession", value: "Software Development" },
    { title: "Passion", value: "Computer programming" },
    { title: "Current Job Role", value: "Front-end web developer" },
    { title: "Personality", value: "Introvert" }
  ];

  const projects = [
  {
    title: "Travel guru",
    thumb: "../images/travel-guru.png",
    Simple_Overview: "About Full stack travel management application. Using React as front-end library and Node.js as a server side runtime environment.",
    case_study_link: "https://github.com/osama2kabdullah/travel-guru-client/wiki",
    external_links: [{text:"Live", url: "https://travel-guru-b4986.firebaseapp.com/"}, {text: "Front-end Code", url:"https://github.com/osama2kabdullah/travel-guru-client"}, {text:"Back-end Code", url:"https://github.com/osama2kabdullah/travel-guru-server"}] //live link > frontend link > backend link
  },
  {
    title: "Gym Baran",
    thumb: "../images/travel-guru.png",
    Simple_Overview: "gym website client side code with TypeAcript-Next.js",
    case_study_link: "https://github.com/osama2kabdullah/gym-baran-abdullah/blob/master/README.md",
    external_links: [{text:"Live", url: "https://gym-baran-abdullah.vercel.app/"}, {text: "Front-end Code", url:"https://github.com/osama2kabdullah/gym-baran-abdullah"}] //live link > frontend link > backend link
  },
  ]
  return (
    <>
    <NavBar/>
      <div className="bio-section">
        <StaticImage
          src="../images/profile_image.jpeg"
          placeholder="blurred"
          width={380}
          height={450}
          alt="osama"
          class="profile-image"
        />

        <table>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>
                  <b>{data.title}</b>
                </td>
                <td>{data.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container">
        <h2>I'm saying about myself <span onClick={toggleAudio} className="audio-play-btn">{audioPlay ? "▮▮":'▶'}</span></h2>
        <p>
          I'm a web developer from Bangladesh, with expertise in building user interfaces. I started learning web development in July 2022 and often collaborate with UI/UX designers to create visually appealing web applications. My focus is on developing client-side web applications and integrating them with server-side components.
          <br/>
          Read my <Link to="/Gists" className="link-x"> gist <span className="icon">➙</span></Link>
          <br/>
          <br/>
          <b>Skills:</b> JavaScript, TypeScript, HTML, CSS, Git
          <br/>
          <br/>
          <div className="project-links">
          <Gen_link url="https://github.com/osama2kabdullah" type="_blank" classname="link-y" text="Github"/>
          <Gen_link url="https://stackoverflow.com/users/19859792/osama-abdullah" type="_blank" classname="link-y" text="Stackoverflow"/>
          <Gen_link url="https://www.linkedin.com/in/md-abdullah-9121b5228" type="_blank" classname="link-y" text="Linkedin"/>
          <Gen_link url="https://twitter.com/OsamaAb41115937" type="_blank" classname="link-y" text="Twitter"/>
          </div>
        </p>
        <br/>
        <h2>Developer journey</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae illum
          obcaecati, perspiciatis exercitationem nam eum quo commodi nisi
          nostrum libero ex incidunt voluptates, tempora dicta iusto quibusdam
          ad animi cumque?
        </p>
        <br/>
        <h2>Projects</h2>
        <div className="project-showcase-section">
         {projects.map(project=><div className="project-card">
           <StaticImage src="../images/gym_baran.png"/>
            {/*<GatsbyImage Image={project.thumb} alt={`dsds`} />*/}
            <div className="project-card-desc">
            <h3>{project.title}</h3>
            <p><b>Simple Overview:</b> {project.Simple_Overview} <a href={project.case_study_link} target="_blank" rel="noopener noreferrer" className="link-x"> Read case study <span className="icon">➙</span></a></p>
            <div className="project-links">
             {project.external_links.map(ex_link=><Gen_link url={ex_link.url} type="_blank" classname="link-y" text={ex_link.text}/>)}
             </div>
            </div>
          </div>)}
          </div>
      </div>
    </>
  );
};

type LinkParams = {
  url: string;
  type: string;
  classname: string;
  text: string;
}

function Gen_link({url, type="normal", classname, text}: LinkParams): JSX.Element {
  if (type === "_blank") {
    return <li><a href={url} target="_blank" rel="noopener noreferrer" className={classname}><span className="icon">⇱</span>{text}</a></li>
  }
  return <li><a href={url} className={classname}><span className="icon">⇱</span>{text}</a></li>
}

export default IndexPage;

export const Head: HeadFC = () => <title>About - Abdullah</title>;