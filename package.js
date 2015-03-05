Package.describe({
  name: 'gildaspk:simpleschema-tapi18n-labels',
  version: '0.0.1',
  summary: 'Allows to use Tapi18n for schemas labels',
  git: 'https://github.com/djhi/meteor-simpleschema-tapi18n-labels.git',
});

var both = ["client", "server"];
var client = "client";
var server = "server";

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use(['coffeescript', 'check', 'templating'], both);
  api.use('aldeed:simple-schema@1.3.0', both);
  api.use('tap:i18n@1.4.1', both);

  api.addFiles('gildaspk:simpleschema-tapi18n-labels.coffee', both);
  api.export('SimpleSchemaTapi18n', both);
});

Package.onTest(function(api) {
  api.use('tinytest', both);
  api.use(['coffeescript', 'check', 'templating'], both);
  api.use('aldeed:simple-schema@1.3.0', both);
  api.use('tap:i18n@1.4.1', both);
  api.imply('tap:i18n@1.4.1', both);
  api.use('gildaspk:simpleschema-tapi18n-labels', both);

  api.addFiles([
    'package-tap.i18n',
  ], both);

  api.addFiles([
    'i18n/test.en.i18n.json',
    'i18n/test.fr.i18n.json'
  ], both);

  api.addFiles('gildaspk:simpleschema-tapi18n-labels-tests.js', both);
});
