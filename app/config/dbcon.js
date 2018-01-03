/**
 * @author Ishtiaque
 * @desc Connects to the DB.
 * @returns {Promise}
 */

function connectDB() {
  // Setting Mongoose to use ES6 native promises.
  global.mongoose.Promise = global.Promise;
  // Create the connection url based on the env properties.
  // eslint-disable-next-line
  // let db = (process.env.ENV === 'production' ? 'prod' : (process.env.ENV === 'test' ? 'test' : 'dev'));
  const db = process.env.DB_DB;
  let userPass = '';
  if (process.env.DB_USER) {
    userPass = process.env.DB_USER;
    if (process.env.DB_PASS) {
      userPass = `${process.env.DB_USER}:${process.env.DB_PASS}`;
    }
  }
  const uri = `mongodb://${userPass}@${process.env.DB_HOST}:${process.env.DB_PORT}/${db}`;
  const opts = {
    useMongoClient: true,
    config: {
      autoIndex: true,
    },
  };
  // NOTE: set autoIndex to false in production mode to boost performance.
  console.info(`Connecting to DB @ ${uri}`);
  const promise = global.mongoose.connect(uri, opts);
  return promise;
}

module.exports = connectDB;