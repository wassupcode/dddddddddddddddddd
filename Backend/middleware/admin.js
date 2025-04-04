const adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Требуются права администратора'
      });
    }
    next();
  };
  
  module.exports = adminMiddleware;