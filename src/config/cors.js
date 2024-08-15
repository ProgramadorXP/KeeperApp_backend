// CORS configuration
const corsOptions = {
  origin: function(origin, callback) {
    const url = [process.env.FRONTEND_URL];
    if (url.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

export default corsOptions;