# WebComponents
A simple demonstration for web compoments compilation and usage

# The sample app / demo is not done and currently only a playground for testing

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
When gulp is done you can simply open demo/index.html in any browser.

## Features
- Components
    - SCSS
        - Must be written independent from javascripts and templates, they can depend on other scss files though
    - Templates
        - Can depend on templates and javascripts
    - ES6 Javascript
        - Can depend on templates and javascripts

## Combined with Web Components Standard
### Twig
```twig
{% block dependencies %}
    {{ import ("component", "components/test" );
{% endblock %}

{% block content %}
    <my-test-component>
        <my-test-entry>1</my=test-entry>
        <my-test-entry>
            <h1>hello</h1>
        </my=test-entry>
        <my-test-entry hidden='true'>3</my=test-entry>
    </my-test-component>
{% endblock %}
```

### JS
```js
import testComponent from 'components/test';

var element = testComponent.create()
    .with('my-test-entry', {}, '1')
    .with('my-test-entry', {}, testComponent.createChild()
        .with('h1', {}, 'hello'))
    .with('my-test-entry', {'hidden': true}, '3');

$('body').append(element);
```
Keep in mind that when creating a bigger element frontend templates should be used instead,

## Syntax for including / requiring parts of components
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

### SCSS
SCSS' import syntax is used
```scss
@import "components/test/styling1"
```

## Overhead / Polyfill
Templates are used to generate the required overhead, take a look at gulp/templates/ to see what code will actually generated