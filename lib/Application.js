window.app =  {
  templateBlockCache: {},
  templateCache: {},

  /**
   * Renders all blocks of the given template using the given data
   */
  renderTemplate: function (uniqueName, templateString, templateData) {
    // check if already compiled
    if (!_.contains(this.templateCache, uniqueName)) {
      var blocks = {};

      // compile template
      var template = twig.twig({
        data: templateString
      });
      this.templateCache[uniqueName] = template;

      // grab all 'block' logic-blocks and save their syntax tree
      template.tokens.forEach((token) => {
        if (token.type == 'logic') {
          token = token.token;

          if (token.type == 'Twig.logic.type.block') {
            if (token.block != 'dependencies') { // hide dependencies in code
              blocks[token.block] = token.output;
            }
          }
        }
      });

      this.templateBlockCache[uniqueName] = blocks;
    }

    // render all blocks
    var output = {};
    _.forEach(this.templateBlockCache[uniqueName], function (block, blockName) {
      // replace syntax tree of template with the syntax tree of the block
      this.templateCache[uniqueName].tokens = this.block.tokens;
      // now render it
      output[blockName] = this.templateCache[uniqueName].render(templateData);
    });
    return output;
  }
};