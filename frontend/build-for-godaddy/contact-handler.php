<?php
/**
 * EXRSIM Contact Form Handler
 * For GoDaddy cPanel Hosting
 */

// Enable error reporting for debugging (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Security Headers
header('Access-Control-Allow-Origin: *'); // Update this to your domain in production
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
$requiredFields = ['firstName', 'lastName', 'email', 'organization', 'inquiry', 'message'];
$errors = [];

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        $errors[] = ucfirst(str_replace('_', ' ', $field)) . ' is required';
    }
}

// Validate email format
if (!empty($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email address';
}

// Return validation errors
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Validation failed', 'errors' => $errors]);
    exit();
}

// Sanitize input data
function sanitize($data) {
    return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}

$firstName = sanitize($data['firstName']);
$lastName = sanitize($data['lastName']);
$email = sanitize($data['email']);
$phone = !empty($data['phone']) ? sanitize($data['phone']) : 'Not provided';
$organization = sanitize($data['organization']);
$title = !empty($data['title']) ? sanitize($data['title']) : 'Not provided';
$sector = !empty($data['sector']) ? sanitize($data['sector']) : 'Not specified';
$inquiry = sanitize($data['inquiry']);
$message = sanitize($data['message']);
$preferredContact = !empty($data['preferredContact']) ? sanitize($data['preferredContact']) : 'Email';
$urgency = !empty($data['urgency']) ? sanitize($data['urgency']) : 'Normal';

// Email configuration
$to = 'info@exrsim.com';
$subject = "EXRSIM Contact Form: {$inquiry} - {$firstName} {$lastName}";

// Create email body with professional formatting
$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f97316; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #0f172a; }
        .field-value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #f97316; }
        .urgency-badge { display: inline-block; padding: 5px 10px; border-radius: 4px; font-weight: bold; }
        .urgency-normal { background-color: #4ade80; color: white; }
        .urgency-urgent { background-color: #fb923c; color: white; }
        .urgency-emergency { background-color: #ef4444; color: white; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>EXRSIM Contact Form Submission</h1>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='field-label'>Inquiry Type:</div>
                <div class='field-value'>{$inquiry}</div>
            </div>
            
            <div class='field'>
                <div class='field-label'>Urgency Level:</div>
                <div class='field-value'>
                    <span class='urgency-badge urgency-" . strtolower(str_replace(['(', ')', ' '], '', $urgency)) . "'>{$urgency}</span>
                </div>
            </div>
            
            <hr style='margin: 20px 0; border: none; border-top: 2px solid #ddd;'>
            
            <h2 style='color: #0f172a;'>Contact Information</h2>
            
            <div class='field'>
                <div class='field-label'>Name:</div>
                <div class='field-value'>{$firstName} {$lastName}</div>
            </div>
            
            <div class='field'>
                <div class='field-label'>Email:</div>
                <div class='field-value'><a href='mailto:{$email}'>{$email}</a></div>
            </div>
            
            <div class='field'>
                <div class='field-label'>Phone:</div>
                <div class='field-value'>{$phone}</div>
            </div>
            
            <div class='field'>
                <div class='field-label'>Preferred Contact Method:</div>
                <div class='field-value'>{$preferredContact}</div>
            </div>
            
            <hr style='margin: 20px 0; border: none; border-top: 2px solid #ddd;'>
            
            <h2 style='color: #0f172a;'>Organization Details</h2>
            
            <div class='field'>
                <div class='field-label'>Organization:</div>
                <div class='field-value'>{$organization}</div>
            </div>
            
            <div class='field'>
                <div class='field-label'>Job Title:</div>
                <div class='field-value'>{$title}</div>
            </div>
            
            <div class='field'>
                <div class='field-label'>Sector:</div>
                <div class='field-value'>{$sector}</div>
            </div>
            
            <hr style='margin: 20px 0; border: none; border-top: 2px solid #ddd;'>
            
            <h2 style='color: #0f172a;'>Message</h2>
            
            <div class='field'>
                <div class='field-value' style='white-space: pre-wrap;'>{$message}</div>
            </div>
        </div>
        <div class='footer'>
            <p>This email was sent from the EXRSIM website contact form.</p>
            <p>Submission Date: " . date('F j, Y, g:i a T') . "</p>
        </div>
    </div>
</body>
</html>
";

// Plain text version for email clients that don't support HTML
$plainTextBody = "
EXRSIM Contact Form Submission
================================

Inquiry Type: {$inquiry}
Urgency Level: {$urgency}

CONTACT INFORMATION
-------------------
Name: {$firstName} {$lastName}
Email: {$email}
Phone: {$phone}
Preferred Contact: {$preferredContact}

ORGANIZATION DETAILS
--------------------
Organization: {$organization}
Job Title: {$title}
Sector: {$sector}

MESSAGE
-------
{$message}

---
Submission Date: " . date('F j, Y, g:i a T') . "
";

// Email headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: EXRSIM Website <noreply@exrsim.com>\r\n";
$headers .= "Reply-To: {$firstName} {$lastName} <{$email}>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "X-Priority: " . ($urgency === 'emergency' ? '1' : ($urgency === 'urgent' ? '2' : '3')) . "\r\n";

// Send email
$mailSent = mail($to, $subject, $emailBody, $headers);

// Send confirmation email to the user
if ($mailSent) {
    $confirmationSubject = "Thank you for contacting EXRSIM";
    $confirmationBody = "
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f97316; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>Thank You for Contacting EXRSIM</h1>
            </div>
            <div class='content'>
                <p>Dear {$firstName} {$lastName},</p>
                
                <p>Thank you for your inquiry regarding <strong>{$inquiry}</strong>. We have received your message and one of our emergency preparedness specialists will respond to you within 24 hours.</p>
                
                <p><strong>Your Inquiry Details:</strong></p>
                <ul>
                    <li><strong>Organization:</strong> {$organization}</li>
                    <li><strong>Inquiry Type:</strong> {$inquiry}</li>
                    <li><strong>Urgency:</strong> {$urgency}</li>
                </ul>
                
                <p>If you have an urgent matter, please don't hesitate to contact us directly at:</p>
                <ul>
                    <li><strong>Email:</strong> info@exrsim.com</li>
                    <li><strong>Support:</strong> support@exrsim.com</li>
                </ul>
                
                <p>Best regards,<br>
                <strong>EXRSIM Team</strong><br>
                <em>PLAN - EXECUTE - ANALYSE</em></p>
            </div>
            <div class='footer'>
                <p>© " . date('Y') . " EXRSIM. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $confirmationHeaders = "MIME-Version: 1.0\r\n";
    $confirmationHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
    $confirmationHeaders .= "From: EXRSIM <info@exrsim.com>\r\n";
    $confirmationHeaders .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    
    mail($email, $confirmationSubject, $confirmationBody, $confirmationHeaders);
}

// Return response
if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your inquiry! We will respond within 24 hours.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, there was an error sending your message. Please try again or email us directly at info@exrsim.com'
    ]);
}
?>
