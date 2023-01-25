const errorHandler = (error, req, res, next) => {
  console.log(error);
  res.status(error.status || 500);
  res.send({
    message: error.message || "Internal Server Error",
  });
};

export default errorHandler;
