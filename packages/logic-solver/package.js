Package.describe({
  summary: "General satisfiability solver for logic problems",
  version: '1.0.0-rc.0'
});

Package.on_use(function (api) {
  api.export('Logic');
  api.use('check');
  api.use('underscore');
  api.add_files(['minisat.js',
                 'minisat_wrapper.js',
                 'logic.js',
                 'optimize.js']);
});

Package.on_test(function (api) {
  api.use('tinytest');
  api.use('logic-solver');
  api.add_files('logic_tests.js');
});
