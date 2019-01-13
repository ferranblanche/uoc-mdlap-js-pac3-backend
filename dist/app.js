'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _schema = require('./graphql/schema');

var _schema2 = _interopRequireDefault(_schema);

var _resolver = require('./graphql/resolver');

var _resolver2 = _interopRequireDefault(_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use(_express2.default.json());

app.use('/graphql', (0, _expressGraphql2.default)({
  schema: _schema2.default,
  rootValue: _resolver2.default,
  graphiql: true
}));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//# sourceMappingURL=app.js.map