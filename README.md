## Why I Built This Project

I built this project to provide a starting point for GatsbyJS projects that use Markdown for content. Markdown is a popular markup language that makes it easy to write content that's both human-readable and machine-readable. With this project, you can get up and running quickly with a GatsbyJS project that's set up to use Markdown.

## Screenshots of UI

![image]()

## Technology

- **GatsbyJS:** a framework for building static websites with ReactJS
- **ReactJS:** a JavaScript library for building user interfaces
- **MDX:** a format that allows you to write JSX (a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files) in Markdown documents
- **Sass:** a CSS preprocessor that allows you to use variables, mixins, and other advanced features in your CSS
- **TypeScript:** a superset of JavaScript that adds static typing to the language, making it easier to catch bugs before they happen

To use this project, you'll need to have Node.js and npm (Node Package Manager) installed on your computer. Once you have those installed, you can run the following commands in your terminal:

```bash
npm install   // installs all the project dependencies listed in the package.json file
npm run develop   // starts the development server and opens the site in your browser
npm run build   // builds the site for production
npm run serve   // serves the production build of the site locally
npm run clean   // cleans the cache and public directories
npm run typecheck   // runs the TypeScript compiler to check for any type errors in your code
```
That should get you up and running with this project!

## Project folder structured
```
portfolio-template/
  ├── node_modules/
  ├── .cache/
  ├── public/
  ├── gists/
  ├── src/
  │   ├── component/
  │   │   ├── markdownProps.ts
  │   │   └── GistComponent.tsx
  │   ├── images/
  │   ├── pages/
  │   │   ├── gist/
  │   │   │   └── {MarkdownRemark.parent__(File)__name}.ts
  │   │   ├── Gists.tsx
  │   │   ├── index.tsx
  │   │   └── 404.tsx
  │   └── styles/
  │       └── blog-post.js
  ├── .gitignore
  ├── gatsby-config.ts
  ├── gatsby-browser.ts
  ├── LICENSE
  ├── package-lock.json
  ├── package.json
  ├── README.md
  └── tsconfig.json
```

Let me explain each of these folders and files:
- `node_modules`: This folder contains all the dependencies that the project requires. You don't need to worry about this folder, as it is created automatically when you run the `npm install` command.
- `.cache`:
- `public`:
- `gists`:
- `src`: This folder contains all the source code for the project. It's where you'll make most of your changes.
  - `component`: This folder contains the React components that make up the site. The `Layout` component provides the basic structure of the site, while the `SEO` component helps with search engine optimization.
  - `pages`: This folder contains the pages of the site. In this project, there are two pages: `index.js`, which serves as the homepage, and `404.js`, which is displayed when a page is not found.
  - `styles`: This folder contains the CSS files for the project. `global.css` contains styles that are applied to the entire site, while `index.css` contains styles that are specific to the homepage.
  - `images`: This folder contains the templates for the site. In this project, there is one template: `blog-post.js`. This template is used to display individual blog posts.
- `.gitignore`: This file tells Git which files and folders to ignore when committing changes. This can be helpful for excluding files that are generated automatically or contain sensitive information.
- `gatsby-config.ts`: This file contains configuration settings for the GatsbyJS site, such as the site title, description, and plugins.
- `gatsby-browser.ts`:
- `LICENSE`: This file contains the license under which the project is released. In this case, the project is released under the MIT license.
- `package-lock.json`: This file contains information about the exact versions of dependencies that the project requires. You don't need to worry about this file, as it is created automatically when you run the `npm install` command.
- `package.json`: This file contains metadata about the project, such as the name, version, and dependencies. It also contains scripts that can be run using the `npm run` command.
- `tsconfig.json`:
- `README.md`: This file contains information about the project, including how to use it and how to contribute to it. It's the file you're currently reading!

## How to Use This Repo

To use this repository, simply clone it to your local machine and start customizing it to meet your needs. Here's a basic set of steps to get started:

1. **Clone the repository:** Use the `git clone` command to create a local copy of the repository on your computer.

```bash
git clone https://github.com/osama2kabdullah/portfolio-template.git
```

2. **Install the dependencies:** Use the `npm install` command to install the project's dependencies.

```bash
cd portfolio-template
npm install
```

3. **Customize the project:** Use your preferred code editor to make changes to the project's files. You can customize the look and feel of the site, add new pages, and more.

4. **Run the development server:** Use the `npm start` command to start the GatsbyJS development server. This will compile your changes and make the site available at [http://localhost:8000/](http://localhost:8000/) and `http://192.168.x.x:8000/`.

5. **Build the site for production:** Use the `npm run build` command to build the site for production. This will create a set of static files that can be uploaded to a web server.

```bash
npm run build
```

That's it! With these steps, you should be able to get up and running quickly with a GatsbyJS project that uses Markdown for content. Happy coding!

## Contributing to this Project

Thanks for considering contributing to the GatsbyJS project! Welcome all types of contributions, from bug reports to feature requests to code changes. Here's how you can get started:

1. **Fork the repository:** This creates a copy of the project on your own GitHub account that you can make changes to.

2. **Clone your fork:** Use the `git clone` command to create a local copy of your fork on your computer.

```bash
git clone https://github.com/<your-username>/<repo-name>.git
```

3. **Make your changes:** This can involve writing code, updating documentation, or making other types of improvements.
4. **Test your changes:** Before submitting a pull request, make sure your changes work as expected.
5. **Submit a pull request:** Once you're confident your changes are ready, submit a pull request to the this GatsbyJS repository. I'll review your changes and provide feedback if necessary.

That's it! We appreciate all contributions to the project, no matter how big or small.
