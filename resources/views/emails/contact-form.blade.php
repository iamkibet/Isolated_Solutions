<!DOCTYPE html>
<html>

<head>
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            background-color: #02789e;
            color: white;
            padding: 20px;
            text-align: center;
        }

        .content {
            padding: 20px;
            background-color: #f9f9f9;
        }

        .field {
            margin-bottom: 15px;
        }

        .label {
            font-weight: bold;
            color: #02789e;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
            <div class="field">
                <span class="label">Name:</span>
                <p>{{ $name }}</p>
            </div>
            <div class="field">
                <span class="label">Email:</span>
                <p>{{ $email }}</p>
            </div>
            <div class="field">
                <span class="label">Subject:</span>
                <p>{{ $subject }}</p>
            </div>
            <div class="field">
                <span class="label">Message:</span>
                <p>{{ $message }}</p>
            </div>
        </div>
    </div>
</body>

</html>
