# WebComponents
A simple demonstration for web compoments compilation and usage

## Using
```bash
git clone https://github.com/Auruss/WebComponents.git
cd WebComponents
git submodule init
git submodule update
npm i
npm i gulp -g
gulp dev
```

This will gather all dependencies, compile everything together and run the demo server by default hosted on http://localhost:8082

## Features
- Components
    - SCSS
        - Can't depend on templates or Javascripts
    - Templates
        - Can depend on templates and javascripts
    - ES6 Javascript
        - Can depend on templates and javascripts

## Syntax
### Twig
```twig
{% block dependencies %}
    {{ import ("scss",       "components/test/styling1" );
    {{ import ("scss",       "components/test/styling2" );
    {{ import ("js",         "components/test/module1" );
    {{ import ("template",   "components/other/foo" );
{% endblock %}
```

### JS
ES6 Module syntax is used
```js
import styling1 from "components/test/scss/styling1";
import styling2 from "components/test/scss/styling2";
import module1 from "components/test/module1";
import template1 from "components/other/templates/foo";

styling1.inject(() => { console.log('styling1 done'); });
styling2.inject(() => { console.log('styling2 done'); });
module1.hello();
console.log(template1.render({/* ... */ }));
```
