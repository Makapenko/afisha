function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.json({
      code: 'ACCESS DENIED',
      message: 'Доступ запрещён',
    });
  }
}

module.exports = isAuthenticated;
