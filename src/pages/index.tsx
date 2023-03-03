import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import "../styles/main.scss";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps> = () => {
  const tableData = [
    { title: "Name", value: "Md. Abdullah" },
    { title: "Home", value: "Shiromoni, Phultola, Khulna, Bangladesh" },
    { title: "NID", value: "2716827121" },
    { title: "Call number", value: "019728121" },
    { title: "Email", value: "abdullah21673@gotmal.com" },
    { title: "Age", value: `${21} (Born in ${2001})` },
    { title: "Designation", value: "Web developer" },
    { title: "Designation", value: "Web developer" },
    { title: "Designation", value: "Web developer" },
    { title: "Designation", value: "Web developer" },
    { title: "Designation", value: "Web developer" },
  ];

  return (
    <>
      <Link to="/Gists">
        <h1>Gist page</h1>
      </Link>
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
        </p>
        <h2>Developer journey</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae illum
          obcaecati, perspiciatis exercitationem nam eum quo commodi nisi
          nostrum libero ex incidunt voluptates, tempora dicta iusto quibusdam
          ad animi cumque?
        </p>
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
                <Link className="link" to={`/gist/dsds`}>
                  Read case study ➙
                </Link>
              </p>
              <div className="project-links">
              <li><span className="icon">⇱</span>Github</li>
              <li>⇱ Front-end code</li>
              <li>⇱ Back-end code</li>
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
