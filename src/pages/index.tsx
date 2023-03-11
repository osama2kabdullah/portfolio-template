import * as React from "react";
import { graphql, HeadFC, Link, PageProps, useStaticQuery } from "gatsby";
import "../styles/main.scss";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {

  const birthdate = new Date(2001, 10, 25);  // months are zero-indexed, so 10 represents November
const now = new Date();
const diff = now.getTime() - birthdate.getTime();  // get difference between now and birthdate in milliseconds
const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));  // convert milliseconds to years (taking leap years into account)

console.log(age);  // output: your age in years

  
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

  return (
    <>
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
        <h2>I'm saying about myself</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae illum
          obcaecati, perspiciatis exercitationem nam eum quo commodi nisi
          nostrum libero ex incidunt voluptates, tempora dicta iusto quibusdam
          ad animi cumque?
          <br/>
          Read my <Link to="/Gists" className="link-x"> gist <span className="icon">➙</span></Link>
          <br/>
          <br/>
          <b>Skills:</b> JavaScript, TypeScript, HTML, CSS, Git
          <br/>
          <br/>
          <div className="project-links">
          <Link to="/" className="link-y"> <span className="icon">⇱</span>Github</Link>
          <Link to="/" className="link-y"> <span className="icon">⇱</span>Stackoverflow</Link>
          <Link to="/" className="link-y"> <span className="icon">⇱</span>Linkdin</Link>
          <Link to="/" className="link-y"> <span className="icon">⇱</span>Twitter</Link>
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
          <div className="project-card">
            <StaticImage
              src="../images/7335301_3606208.jpg"
              placeholder="blurred"
              alt="osama"
            />
            <div className="project-card-desc">
              <h3>Travel guru</h3>
              <p>
                <b>Simple Overview:</b> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Enim, tempore hic. Quis eveniet cupiditate
                quibusdam quidem nulla impedit suscipit reiciendis totam in
                modi, a perspiciatis eum debitis exercitationem consectetur
                quisquam!{" "}
                <Link className="link-x" to={`/gist/dsds`}>
                  Read case study <span className="icon">➙</span>
                </Link>
              </p>
              <div className="project-links">
                <li>
                  <Link to="/" className="link-y">
                    <span className="icon">⇱</span>Live
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-y">
                    <span className="icon">⇱</span>Front-end code
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-y">
                    <span className="icon">⇱</span>Back-end code
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
