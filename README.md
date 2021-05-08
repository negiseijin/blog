# NextJS Typescript Boilerplate

Bootstrap a developer-friendly NextJS app configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- css Formatting with [stylelint](https://stylelint.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## Deploy your own
You can copy this repository and deploy it to Netlify by clicking the button below.

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/negiseijin/blog"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete.

## Build & Deployment

### Deploying with CLI

You need to install Netlify's CLI first:

```
npm install -g netlify-cli
```

Then run the following command:

```
make deploy
```

### Deploying with Netlify Build

Create a new Netlify site and link it to your repository. Netlify will detect the Rust toolchain automatically, build the code and deploy it for you.

## How to use

```bash
# clone
git clone https://github.com/negiseijin/blog
# move blog
cd blog
# install library
yarn
```