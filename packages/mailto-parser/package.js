Package.describe({
  summary: 'NPMs mail parser for meteor'
});

Package.on_use(function (api) {
  Npm.depends({"mailto-parser": '1.0.0'});
});