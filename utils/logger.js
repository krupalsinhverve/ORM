exports.info = (msg, ...args) => {
  console.log(`[INFO] ${new Date().toISOString()} - ${msg}`, ...args);
};

exports.warn = (msg, ...args) => {
  console.warn(`[WARN] ${new Date().toISOString()} - ${msg}`, ...args);
};

exports.error = (msg, ...args) => {
  console.error(`[ERROR] ${new Date().toISOString()} - ${msg}`, ...args);
};
