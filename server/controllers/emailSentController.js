const nodemailer = require('nodemailer');

exports.SendEmailOfServiceQuestionnaire = (req, res) => {
    const { myEmail, myPassword, fromEmail, fromName, emailBody } = req.body;

    // Configure Nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: myEmail,
            pass: myPassword
        }
    });

    // Email content
    let mailOptions = {
        from: fromEmail,
        to: myEmail,
        subject: `Service Questionnaire of ${fromName}`,
        html: emailBody
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) 
        {
            console.log(error);
            res.status(500).json({ message: 'Error: Unable to send email' });
        } 
        else 
        {
            console.log('Email sent: ' + info.response);
            res.status(201).json({ message: 'Email sent successfully' });
        }
    });
};

exports.SendEmailOfContactUs = (req, res) => {
    const { myEmail, myPassword, fromEmail, emailSubject, emailBody } = req.body;
    // Configure Nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: myEmail,
            pass: myPassword
        }
    });

    // Email content
    let mailOptions = {
        from: fromEmail,
        to: myEmail,
        subject: emailSubject,
        html: emailBody
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) 
        {
            console.log(error);
            res.status(500).json({ message: 'Error: Unable to send email' });
        } 
        else 
        {
            console.log('Email sent: ' + info.response);
            res.status(201).json({ message: 'Email sent successfully' });
        }
    });
};