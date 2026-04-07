# EXRSIM Website - GoDaddy cPanel Deployment Guide

## 📋 Overview

This guide will help you deploy your EXRSIM website to GoDaddy cPanel hosting with a fully functional contact form that sends emails to info@exrsim.com.

---

## 🚀 Step-by-Step Deployment Instructions

### Step 1: Build Your React Application

Before deploying, you need to create a production build of your React application.

**On your local machine or in this workspace, run:**

```bash
cd /app/frontend
yarn build
```

This will create a `build` folder containing your optimized production-ready website.

---

### Step 2: Access Your GoDaddy cPanel

1. Log in to your GoDaddy account
2. Navigate to **My Products**
3. Find your hosting account and click **Manage**
4. Click **cPanel Admin** to access the control panel

---

### Step 3: Prepare Your Domain

1. In cPanel, go to **Domains** or **Addon Domains**
2. Make sure your domain (e.g., exrsim.com) is properly configured
3. Note the **Document Root** path (usually `/public_html` or `/public_html/yourdomain.com`)

---

### Step 4: Upload Your Website Files

**Option A: Using File Manager (Recommended for beginners)**

1. In cPanel, open **File Manager**
2. Navigate to your document root (e.g., `/public_html`)
3. If there are any default files (index.html, etc.), delete or rename them
4. Click **Upload** and upload ALL files from your `frontend/build` folder
5. **IMPORTANT:** Upload the PHP handler file:
   - Upload `/app/frontend/public/contact-handler.php` to the root of your public_html folder
   - Make sure it's in the same directory as index.html

**Option B: Using FTP (Advanced users)**

1. Use an FTP client (like FileZilla)
2. Connect to your GoDaddy hosting:
   - Host: ftp.yourdomain.com
   - Username: Your cPanel username
   - Password: Your cPanel password
3. Upload all files from `frontend/build` to `/public_html`
4. Upload `contact-handler.php` to `/public_html`

---

### Step 5: Configure the PHP Handler

After uploading, ensure the PHP handler has correct permissions:

1. In **File Manager**, locate `contact-handler.php`
2. Right-click → **Permissions**
3. Set permissions to **644** (readable by everyone, writable only by owner)

---

### Step 6: Configure Email Settings

**Update the PHP script with your domain email:**

1. Open `contact-handler.php` in File Manager's **Code Editor**
2. Find line 61 where it says:
   ```php
   $to = 'info@exrsim.com';
   ```
3. Make sure this email is set up in your cPanel email accounts
4. Optionally, update line 238 to change the "From" address:
   ```php
   $headers .= "From: EXRSIM Website <noreply@exrsim.com>\r\n";
   ```
   Replace `exrsim.com` with your actual domain

**Set up email account in cPanel:**

1. Go to **Email Accounts** in cPanel
2. Create `info@exrsim.com` if it doesn't exist
3. Create `noreply@exrsim.com` (optional, for automated replies)

---

### Step 7: Test PHP Mail Function

Some GoDaddy servers have restrictions on the PHP `mail()` function. Let's test it:

1. Create a test file `test-email.php` with this content:
   ```php
   <?php
   $to = "your-email@example.com";
   $subject = "Test Email";
   $message = "This is a test email from GoDaddy.";
   $headers = "From: noreply@yourdomain.com";
   
   if(mail($to, $subject, $message, $headers)) {
       echo "Email sent successfully!";
   } else {
       echo "Email failed to send.";
   }
   ?>
   ```
2. Upload to your public_html
3. Visit: `https://yourdomain.com/test-email.php`
4. Check if you received the test email

**If the test email fails:**
- Your server might need SMTP authentication
- See **Troubleshooting** section below

---

### Step 8: Update CORS Settings (Optional for Production)

For better security, update the PHP handler to only accept requests from your domain:

In `contact-handler.php`, change line 11 from:
```php
header('Access-Control-Allow-Origin: *');
```

To:
```php
header('Access-Control-Allow-Origin: https://yourdomain.com');
```

---

### Step 9: Test Your Contact Form

1. Visit your website at `https://yourdomain.com`
2. Navigate to the **Contact** page
3. Fill out the form with test data
4. Click **Send Message**
5. You should see a success message
6. Check the email inbox for `info@exrsim.com`
7. You should also receive a confirmation email at the email address you entered in the form

---

## 🔧 Troubleshooting

### Issue 1: PHP mail() Function Not Working

**Solution: Use PHPMailer with SMTP**

If the basic PHP `mail()` function doesn't work, you'll need to use PHPMailer with SMTP authentication.

1. Download PHPMailer from: https://github.com/PHPMailer/PHPMailer
2. Upload the `PHPMailer` folder to your public_html
3. Use the alternative PHP handler provided below (see Alternative PHP Handler section)

### Issue 2: Emails Going to Spam

**Solutions:**
- Set up SPF records in your domain DNS settings
- Set up DKIM authentication in cPanel
- Use your domain's email address as the "From" address
- Contact GoDaddy support to verify your domain is not blacklisted

### Issue 3: 404 Error on Form Submission

**Solution:**
- Make sure `contact-handler.php` is in the root directory (same location as index.html)
- Check file permissions (should be 644)
- Verify the file was uploaded correctly

### Issue 4: CORS Errors

**Solution:**
- Make sure you updated the CORS headers in `contact-handler.php` to match your domain
- Clear browser cache and try again

---

## 📧 Alternative PHP Handler with PHPMailer (SMTP)

If basic PHP mail() doesn't work, here's an alternative using PHPMailer:

**Step 1: Download PHPMailer**
- Go to: https://github.com/PHPMailer/PHPMailer/releases
- Download the latest release
- Upload the `PHPMailer` folder to your public_html

**Step 2: Replace contact-handler.php**
Use this code (requires your email credentials):

```php
<?php
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Your existing header code...

// Replace the mail() function with PHPMailer
$mail = new PHPMailer(true);

try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host = 'smtp.secureserver.net'; // GoDaddy SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'info@exrsim.com'; // Your email
    $mail->Password = 'your-email-password'; // Your email password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Email Configuration
    $mail->setFrom('info@exrsim.com', 'EXRSIM Website');
    $mail->addAddress('info@exrsim.com');
    $mail->addReplyTo($email, "{$firstName} {$lastName}");

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $emailBody;
    $mail->AltBody = $plainTextBody;

    $mail->send();
    
    // Send confirmation email to user
    // ... (similar configuration)
    
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $mail->ErrorInfo]);
}
?>
```

**IMPORTANT:** Replace `'your-email-password'` with your actual email password.

---

## 🔐 Security Best Practices

1. **Protect your PHP file:**
   - Add rate limiting to prevent spam
   - Implement CAPTCHA for additional security

2. **Secure email credentials:**
   - Never commit email passwords to version control
   - Use environment variables or config files outside public_html

3. **Enable HTTPS:**
   - GoDaddy provides free SSL certificates
   - Go to cPanel → SSL/TLS Status → Run AutoSSL

4. **Monitor form submissions:**
   - Check your email regularly for spam submissions
   - Set up email filters if needed

---

## 📱 Testing Checklist

Before going live, test these scenarios:

- [ ] Form submits successfully with all required fields
- [ ] Email arrives at info@exrsim.com with correct formatting
- [ ] User receives confirmation email
- [ ] Form validation works (try submitting without required fields)
- [ ] Loading state displays while sending
- [ ] Success message displays after submission
- [ ] Error handling works (test by temporarily breaking the PHP file)
- [ ] Form works on mobile devices
- [ ] Test with different inquiry types and urgency levels

---

## 🆘 Getting Help

**GoDaddy Support:**
- Phone: 1-480-505-8877
- Live Chat: Available in your GoDaddy account
- Help Center: https://www.godaddy.com/help

**Common Issues to Ask GoDaddy Support:**
1. "My PHP mail() function is not working"
2. "I need SMTP settings for sending emails"
3. "How do I set up SPF records for my domain?"
4. "My emails are going to spam"

---

## 📂 File Structure on GoDaddy

Your final file structure should look like this:

```
/public_html/
├── index.html
├── contact-handler.php
├── static/
│   ├── css/
│   ├── js/
│   └── media/
├── favicon.ico
├── logo192.png
├── logo512.png
├── manifest.json
├── robots.txt
└── [all other React build files]
```

---

## ✅ Success!

Once everything is working:
1. Your website will be live at your domain
2. Contact form will send emails to info@exrsim.com
3. Users will receive automatic confirmation emails
4. All form data will be professionally formatted in the email

**Need additional help? Feel free to ask!**

---

## 📝 Additional Notes

- The contact form captures: First Name, Last Name, Email, Phone, Organization, Title, Sector, Inquiry Type, Message, Preferred Contact Method, and Urgency Level
- All data is included in the email sent to info@exrsim.com
- The email is formatted with professional HTML styling
- A confirmation email is automatically sent to the person who submitted the form
- Form includes validation for required fields
- Loading states and error handling are built-in

**Your EXRSIM website is now ready for deployment!** 🚀
