exports.allmessages = (req, res, next) => {
	req.assert('subject', 'Please provide subject').notEmpty();
    req.assert('message', 'Please provide message').notEmpty();
    req.assert('parentMessageId', 'Please provide parentMessageId').notEmpty();
	req.assert('status', 'Please provide Status(Unread/Sent)').notEmpty();

	const errors = req.validationErrors();
	if (errors) return res.status(400).json({status: 400, error: errors[0].msg});

	return next();
};

exports.signupvali = (req, res, next) => {
	req.assert('email', 'Please provide your email').notEmpty();
    req.assert('firstName', 'Please provide you First Name').notEmpty();
    req.assert('lastName', 'Please provide your Last Name').notEmpty();
	req.assert('password', 'Please provide your password').notEmpty();

	const errors = req.validationErrors();
	if (errors) return res.status(400).json({status: 400, error: errors[0].msg});

	return next();
};
