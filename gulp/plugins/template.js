var _ = require('lodash'),
    through = require('through2'),
    twig = require('../util/twig');

module.exports = function (options) {
    // default options
    var defaults = {};
    options = _.defaults(defaults, options);

    /**
     * Called when file content has been read
     * @param file Filepath
     * @param encoding Encoding
     * @param callback Done callback
     */
    function bufferContents (file, encoding, callback) {
        try {
            var renderedTemplate = twig.renderTemplate(file.relative, file.contents.toString(), {});
        } catch (e) {
            // twig might have errors because some other template blocks need data that are not available here
            // since we only need dependencies block we don't care about these
        }

        // render dependency block
        var baseDependency = eval('[' + renderedTemplate.dependencies + ']');

        // done
        callback();
    }

    /**
     * Called when all done callbacks has been called
     * @param callback Done callback
     */
    function endStream (callback) {
        // done
        callback();
    }

    // Create through2 vinyl stream
    return through.obj(bufferContents, endStream);
};