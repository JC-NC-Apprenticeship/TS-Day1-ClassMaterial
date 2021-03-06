/* // Task
function getConfig(env: unknown) {
  const config = {
    TEST: "testing",
    DEV: "devving",
    PROD: "prodding",
  };
  return config[env];
}

const prodConfig = getConfig("PROD");
const devConfig = getConfig("DEV");
const testConfig = getConfig("TEST");
*/

function getConfig(env: "PROD"|"DEV"|"TEST") {
  const config = {
    TEST: "testing",
    DEV: "devving",
    PROD: "prodding",
  };
  return config[env];
}

const prodConfig = getConfig("PROD");
const devConfig = getConfig("DEV");
const testConfig = getConfig("TEST");