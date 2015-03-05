var getSchema = function(){
  return new SimpleSchema({
    myProperty: {
      type: String,
      i18nLabel: 'test'
    }
  });
}

Tinytest.add('i18nLabel is a valid SimpleSchema property', function (test) {
  var schema = getSchema();

  definition = schema.getDefinition('myProperty');

  test.isNotNull(definition.i18nLabel);
  test.equal(definition.i18nLabel, 'test');
});

Tinytest.add('SimpleSchema.label() returns the default language label', function (test) {
  var schema = getSchema();

  definition = schema.getDefinition('myProperty');
  label = schema.label('myProperty')

  test.equal(label, 'test en');
});
