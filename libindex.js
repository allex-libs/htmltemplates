function createLib (execilb, templatelib) {
  'use strict';

  var i = templatelib.inherit,
    o = templatelib.override;

  var elementmarkup = {
    template: '\n<TYPE class="CLASS" ATTRS>\nCONTENTS\n</TYPE>\n',
    replacements: {
      CLASS: '',
      CONTENTS: '',
      ATTRS: ''
    }
  };
  var divmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'div'
      }]
    }
  );
  var sectionmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'section'
      }]
    }
  );
  var strongmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'strong'
      }]
    }
  );

  var formmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'form'
      }]
    }
  );

  var legendmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'legend'
      }]
    }
  );

  var imgmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'img'
      }]
    }
  );

  var fieldsetmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'fieldset'
      }]
    }
  );

  var spanmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'span'
      }]
    }
  );

  var amarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'a',
        ATTRS: 'href="TARGET" ATTRS'
      }],
      replacements: {
        TARGET: '#'
      }
    }
  );

  var imarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'i'
      }]
    }
  );
  var bmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'b'
      }]
    }
  );
  var smallmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'small'
      }]
    }
  );

  var h1markup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'h1'
      }]
    }
  );

  var h2markup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'h2'
      }]
    }
  );

  var h3markup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'h3'
      }]
    }
  );

  var h4markup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'h4'
      }]
    }
  );

  var h5markup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'h5'
      }]
    }
  );

  var h6markup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'h6'
      }]
    }
  );

  var canvasmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'canvas'
      }]
    }
  );

  var selectmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'select' 
      }]
    }
  );

  var optionmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'option' 
      }]
    }
  );

  var ulmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'ul'
      }]
    }
  );

  var olmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'ol'
      }]
    }
  );

  var limarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'li'
      }]
    }
  );

  var labelmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'label'
      }]
    }
  );

  var buttonmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'button'
      }]
    }
  );

  var pmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'p'
      }]
    }
  );

  var navmarkup = i(elementmarkup,
    {
      prereplacements: [{
        TYPE: 'nav'
      }]
    }
  );

  var textareamarkup = {
    template: '\n<textarea name="NAME" class="CLASS" ATTRS />\n',
    replacements: {
      CLASS: '',
      ATTRS: '',
      NAME: ''
    }
  };

  var inputmarkup = {
    template: '\n<input type="TYPE" name="NAME" class="CLASS" ATTRS />\n',
    replacements: {
      CLASS: '',
      ATTRS: '',
      NAME: ''
    }
  };

  var textinputmarkup = i(inputmarkup,
    {
      prereplacements: [{
        TYPE: 'text'
      }]
    }
  );

  var numberinputmarkup = i(inputmarkup,
    {
      prereplacements: [{
        TYPE: 'number'
      }]
    }
  );

  var emailinputmarkup = i(inputmarkup,
    {
      prereplacements: [{
        TYPE: 'email'
      }]
    }
  );

  var phoneinputmarkup = i(inputmarkup,
    {
      prereplacements: [{
        TYPE: 'tel'
      }]
    }
  );

  var passwordinputmarkup = i(inputmarkup,
    {
      prereplacements: [{
        TYPE: 'password'
      }]
    }
  );

  var checkboxinputmarkup = i(inputmarkup,
    {
      prereplacements: [{
        TYPE: 'checkbox'
      }]
    }
  );

  var fileinputmarkup = i(inputmarkup,
    {
      prereplacements: [{
        TYPE: 'file'
      }]
    }
  );

  return {
    element: elementmarkup,
    div: divmarkup,
    section: sectionmarkup,
    strong: strongmarkup,
    form: formmarkup,
    legend: legendmarkup,
    img: imgmarkup,
    fieldset: fieldsetmarkup,
    span: spanmarkup,
    a: amarkup,
    italic: imarkup,
    bold: bmarkup,
    small: smallmarkup,
    h1: h1markup,
    h2: h2markup,
    h3: h3markup,
    h4: h4markup,
    h5: h5markup,
    h6: h6markup,
    canvas: canvasmarkup,
    select: selectmarkup,
    option: optionmarkup,
    ul: ulmarkup,
    ol: olmarkup,
    li: limarkup,
    label: labelmarkup,
    button: buttonmarkup,
    p: pmarkup,
    nav: navmarkup,
    textarea : textareamarkup,
    textinput: textinputmarkup,
    numberinput: numberinputmarkup,
    emailinput: emailinputmarkup,
    phoneinput: phoneinputmarkup,
    passwordinput: passwordinputmarkup,
    checkboxinput: checkboxinputmarkup,
    fileinput: fileinputmarkup
  };
}

module.exports = createLib;
