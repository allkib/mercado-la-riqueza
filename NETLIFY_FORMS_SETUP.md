# Netlify Forms Setup Guide

## ✅ Forms Have Been Configured

Both the **Contact** and **Questions** forms have been updated to work with Netlify Forms.

## Required Steps in Netlify Dashboard

### 1. Enable Form Detection

1. Go to your Netlify site dashboard
2. Navigate to **Forms** in the sidebar
3. Click **Enable form detection**
4. This will allow Netlify to automatically scan your site for forms on the next deploy

### 2. Set Up Email Notifications

After enabling form detection, set up email notifications:

1. Go to **Site Settings** → **Forms** → **Form notifications**
2. Click **Add notification**
3. Choose **Email notifications**
4. Enter the email address where you want to receive form submissions
5. Select which forms to notify for:
   - **"contact"** - Contact form submissions
   - **"questions"** - Questions/FAQ form submissions
6. Save the notification

You can set up notifications for:
- **All forms** - Receive all submissions
- **Specific forms only** - Choose which forms trigger emails

### 3. Redeploy Your Site

After enabling form detection:
1. Push your latest code changes (which include the Netlify Forms configuration)
2. Netlify will automatically redeploy
3. Once deployed, Netlify will parse your forms and start accepting submissions

## Form Configuration

### Contact Form
- **Form Name**: `contact`
- **Fields**: name, email, phone, message
- **Location**: `/contact` page

### Questions Form
- **Form Name**: `questions`
- **Fields**: name, email, phone, category, question
- **Location**: `/questions` page

## How It Works

1. **Hidden HTML Forms**: Static HTML forms are included in the page for Netlify to parse during build time
2. **React Forms**: Your interactive React forms submit to Netlify using AJAX
3. **Form Submissions**: All submissions are sent to Netlify's form handling endpoint (`/`)
4. **Email Notifications**: Configured emails will receive notifications for each submission

## Viewing Submissions

After forms are set up, you can view submissions:
1. Go to **Forms** in your Netlify dashboard
2. Click on the form name ("contact" or "questions")
3. View all submissions, export data, or manage settings

## Testing

1. Enable form detection in Netlify
2. Redeploy your site
3. Fill out a test form on your live site
4. Check your Netlify dashboard → Forms for the submission
5. Verify you receive an email notification (if configured)

## Troubleshooting

### Forms Not Working?
- Make sure **Form detection is enabled** in Netlify dashboard
- Ensure you've **redeployed** after enabling form detection
- Check the **Forms** section in Netlify dashboard to see if forms are detected
- Look for errors in the browser console when submitting

### Not Receiving Emails?
- Check your **Spam/Junk folder**
- Verify email notification is set up in Netlify dashboard
- Check that the form name matches ("contact" or "questions")
- Ensure the notification is enabled for the correct form

### Form Submissions Not Appearing?
- Wait a few minutes - submissions may take time to appear
- Check if form detection is enabled
- Verify the form has the correct `name` attribute
- Check Netlify build logs for any form parsing errors

## Additional Configuration

### Custom Success Pages
You can add a custom success page by adding an `action` attribute:
```tsx
<form action="/thank-you" ...>
```

### Spam Protection
Netlify Forms includes built-in spam protection. You can also:
- Enable **reCAPTCHA** in form settings
- Set up **honeypot fields** for additional protection

### Form Limits (Free Tier)
- 100 submissions per month
- Unlimited forms
- Email notifications included

For more submissions, consider upgrading to a paid plan.