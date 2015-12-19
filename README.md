# WebComponents
A simple demonstration for web compoments compilation and usage

## Using
Make sure npm is installed correctly first!

```bash
git clone https://github.com/Auruss/WebComponents.git
cd WebComponents
npm i
gulp dev
```

Don't worry if "npm i" takes some time, it will init submodules, compile jquery and also install gulp globally.
Depending on your system "npm i" needs to be ran as root/admin (because it installs gulp globally)
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
Keep in mind that this additional block won't be visible after compilation.
```twig
{% block dependencies %}
    {{ import ("scss",       "components/test/styling1" );
    {{ import ("scss",       "components/test/styling2" );
    {{ import ("js",         "components/test/module1" );
    {{ import ("template",   "components/other/foo" );
{% endblock %}

{% block content %}
    {% include "components/other/foo.twig" with { data: {/* ... */} } %}
{% endblock %}
```
SCSS and javascript is automatically loaded, templates need to be included using the include block manually.

### JS
ES6 Module syntax is used
```js
import styling1  from "components/test/scss/styling1";
import styling2  from "components/test/scss/styling2";
import module1   from "components/test/module1";
import template1 from "components/other/templates/foo";

styling1.inject(() => { console.log('styling1 done'); });
styling2.inject(() => { console.log('styling2 done'); });
module1.hello();
console.log(template1.render({/* ... */ }));
```
