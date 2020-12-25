const path = require('path');
const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = function override(config, env) {

  const isEnvDevelopment = env === 'development';
  const isEnvProduction = env === 'production';

  alias({
    ...configPaths('tsconfig.paths.json')
  })(config)

  if(isEnvProduction){    
    config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;    
  }
  return config
}