import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import '../styles/main.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
     <Link to="/Gists"><h1>Gist page</h1></Link>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
