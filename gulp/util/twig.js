var twig = require('twig'),
    _ = require('lodash');

/**
 * Import function will simply render json
 */
twig.extendFunction('import', function (type, path) {
    return JSON.stringify({
        type: type,
        path: path
    }) + ',';
});

module.exports = {
    templateCache: {},

    /**
     * Renders all blocks of the given template using the given data
     */
    renderTemplate: function (uniqueName, templateString, templateData) {
        var self = this;

        // check if already compiled
        if (_.isUndefined(self.templateCache[uniqueName])) {
            var blocks = {};

            // compile template
            var template = twig.twig({
                id: uniqueName,
                data: templateString,
                //allowInlineIncludes: true
            });
            self.templateCache[uniqueName] = template;
        }

        return self.templateCache[uniqueName].render(templateData, { output: 'blocks' });
    }
};
