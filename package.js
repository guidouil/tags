Package.describe({
  name: "guidouil:tags",
  summary: "Add groups of tags to selected collections",
  version: "1.1.2",
  git: "https://github.com/guidouil/tags"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.2.1');

  api.use(['livedata', 'mongo-livedata'], ['client', 'server']);
  api.use('aldeed:collection2@2.3.1', ['client', 'server'], {weak: true});
  api.use('aldeed:simple-schema@1.3.0', ['client', 'server'], {weak: true});

  api.addFiles('guidouil:tags.js', ['client', 'server']);

  if (api.export !== undefined) {
    api.export('Tags');
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('guidouil:tags');
  api.addFiles('guidouil:tags-tests.js');
});
