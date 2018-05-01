# Test Application

#Overview

This is Test Application.

Most relevant frameworks/libraries/Tools:

- Webpack
    - Babel (ES6)
    - Sass (css)
- React
- Redux

Testing tools:

- BDD: Cypress (https://www.cypress.io/)
- TDD: Mocha/chai/Enzyme/Sinon
- ESlint

#Directory structure:

```
/bdd - Here is where all the BDD test stuff lives
/tdd - Here is where all the TDD test stuff lives
/dist - This is the minified/concatenated version.
/src - Source code before compilation.
    - /app
        - /assets - css/img/fonts/audio...
        - /components
            - /each-component - This contains every component's specific files *comment*
        - /helpers - Application common functions suchs as API calls, etc.
        - types - Common type declaration such as errors, actions, etc...
```


Install:
npm run full-install

Run:
npm run local

TDD:
npm run tdd-test

BDD:
npm run browser-bdd-test
