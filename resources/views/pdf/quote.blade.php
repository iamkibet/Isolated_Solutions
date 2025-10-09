<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Service Estimate - {{ $quote->quote_number }}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Helvetica', 'Arial', sans-serif;
            color: #374151;
            line-height: 1.5;
            padding: 40px;
            background: #ffffff;
        }

        .header {
            display: table;
            width: 100%;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid #e5e7eb;
        }

        .header-left {
            display: table-cell;
            width: 50%;
            vertical-align: top;
        }

        .header-right {
            display: table-cell;
            width: 50%;
            text-align: right;
            vertical-align: top;
        }

        .logo {
            max-width: 180px;
            height: auto;
            margin-bottom: 15px;
        }

        .company-name {
            font-size: 20px;
            font-weight: bold;
            color: #111827;
            margin-bottom: 8px;
        }

        .company-info {
            font-size: 11px;
            color: #6b7280;
            line-height: 1.7;
        }

        .document-type {
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #6b7280;
            margin-bottom: 8px;
            font-weight: 600;
        }

        .quote-number {
            font-size: 24px;
            font-weight: bold;
            color: #dc2626;
            margin-bottom: 8px;
        }

        .quote-date {
            font-size: 11px;
            color: #6b7280;
        }

        .section {
            margin-bottom: 30px;
        }

        .section-title {
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #6b7280;
            margin-bottom: 12px;
        }

        .estimate-notice {
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 12px 15px;
            margin-bottom: 30px;
            border-radius: 4px;
        }

        .estimate-notice p {
            font-size: 11px;
            color: #92400e;
            margin: 0;
        }

        .client-info-box {
            display: table;
            width: 100%;
            margin-bottom: 30px;
        }

        .client-info-left {
            display: table-cell;
            width: 50%;
            padding-right: 20px;
        }

        .client-info-right {
            display: table-cell;
            width: 50%;
            padding-left: 20px;
        }

        .info-group {
            margin-bottom: 8px;
        }

        .info-label {
            font-size: 10px;
            color: #9ca3af;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 3px;
        }

        .info-value {
            font-size: 12px;
            color: #111827;
            font-weight: 500;
        }

        .services-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        .services-table thead {
            background: #f9fafb;
            border-top: 2px solid #e5e7eb;
            border-bottom: 2px solid #e5e7eb;
        }

        .services-table th {
            padding: 10px 12px;
            text-align: left;
            font-size: 10px;
            font-weight: 600;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .services-table td {
            padding: 14px 12px;
            border-bottom: 1px solid #f3f4f6;
            font-size: 11px;
            vertical-align: top;
        }

        .service-name {
            font-weight: 600;
            color: #111827;
            margin-bottom: 4px;
            font-size: 12px;
        }

        .service-package {
            font-size: 10px;
            color: #dc2626;
            font-weight: 500;
            margin-bottom: 6px;
        }

        .service-description {
            font-size: 10px;
            color: #6b7280;
            margin-bottom: 8px;
            line-height: 1.4;
        }

        .service-features {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .service-features li {
            font-size: 9px;
            color: #6b7280;
            padding: 3px 0;
            padding-left: 12px;
            position: relative;
            line-height: 1.3;
        }

        .service-features li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: #dc2626;
            font-weight: bold;
        }

        .totals {
            margin-top: 30px;
            float: right;
            width: 280px;
        }

        .totals table {
            width: 100%;
            border-collapse: collapse;
        }

        .totals td {
            padding: 10px 0;
            font-size: 12px;
        }

        .totals td:first-child {
            text-align: left;
            color: #6b7280;
        }

        .totals td:last-child {
            text-align: right;
            font-weight: 600;
            color: #111827;
        }

        .totals .total-row {
            border-top: 2px solid #e5e7eb;
            padding-top: 12px;
        }

        .totals .total-row td {
            font-size: 16px;
            font-weight: bold;
            padding-top: 12px;
        }

        .totals .total-row td:last-child {
            color: #dc2626;
        }

        .notes-section {
            clear: both;
            margin-top: 40px;
            padding: 15px;
            background: #f9fafb;
            border-left: 3px solid #dc2626;
            border-radius: 4px;
        }

        .notes-title {
            font-size: 11px;
            font-weight: 600;
            color: #374151;
            margin-bottom: 6px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .notes-content {
            font-size: 11px;
            color: #4b5563;
            line-height: 1.6;
        }

        .footer {
            margin-top: 60px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
            font-size: 9px;
            color: #9ca3af;
            line-height: 1.6;
        }

        .validity-info {
            background: #eff6ff;
            border: 1px solid #dbeafe;
            padding: 12px 15px;
            margin: 25px 0;
            border-radius: 4px;
        }

        .validity-info p {
            font-size: 10px;
            color: #1e40af;
            margin: 0;
        }

        .text-right {
            text-align: right;
        }

        .clearfix::after {
            content: "";
            display: table;
            clear: both;
        }

        hr {
            border: none;
            border-top: 1px solid #e5e7eb;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <div class="header">
        <div class="header-left">
            @if(file_exists(public_path('images/sokomagari.png')))
                <img src="{{ public_path('images/sokomagari.png') }}" alt="{{ config('app.name') }}" class="logo">
            @endif
            <div class="company-name">{{ config('app.name', 'Isolated Solutions Ltd') }}</div>
            <div class="company-info">
                {{ $company['address'] }}<br>
                {{ $company['email'] }}<br>
                {{ $company['phone'] }}<br>
                {{ config('app.url') }}
            </div>
        </div>
        <div class="header-right">
            <div class="document-type">Service Estimate</div>
            <div class="quote-number">{{ $quote->quote_number }}</div>
            <div class="quote-date">Date: {{ $quote->created_at->format('F d, Y') }}</div>
        </div>
    </div>

    <!-- Estimate Notice -->
    <div class="estimate-notice">
        <p><strong>This is an estimate.</strong> Final pricing may vary based on project scope and specific requirements. This quote is valid until {{ $quote->valid_until->format('F d, Y') }} ({{ $quote->created_at->diffInDays($quote->valid_until) }} days from issue date).</p>
    </div>

    <!-- Client Information -->
    <div class="section">
        <div class="section-title">Prepared For</div>
        <div class="client-info-box">
            <div class="client-info-left">
                <div class="info-group">
                    <div class="info-label">Client Name</div>
                    <div class="info-value">{{ $quote->client_name }}</div>
                </div>
                @if($quote->client_company)
                <div class="info-group">
                    <div class="info-label">Company</div>
                    <div class="info-value">{{ $quote->client_company }}</div>
                </div>
                @endif
            </div>
            <div class="client-info-right">
                <div class="info-group">
                    <div class="info-label">Email</div>
                    <div class="info-value">{{ $quote->client_email }}</div>
                </div>
                @if($quote->client_phone)
                <div class="info-group">
                    <div class="info-label">Phone</div>
                    <div class="info-value">{{ $quote->client_phone }}</div>
                </div>
                @endif
            </div>
        </div>
    </div>

    <hr>

    <!-- Services -->
    <div class="section">
        <div class="section-title">Services & Deliverables</div>
        <table class="services-table">
            <thead>
                <tr>
                    <th style="width: 65%;">Description</th>
                    <th style="width: 35%; text-align: right;">Amount</th>
                </tr>
            </thead>
            <tbody>
                @foreach($services as $service)
                <tr>
                    <td>
                        <div class="service-name">{{ $service['name'] }}</div>
                        <div class="service-package">{{ $service['package_name'] }} Package</div>
                        <div class="service-description">{{ $service['description'] }}</div>
                        @if(isset($service['features']) && count($service['features']) > 0)
                        <ul class="service-features">
                            @foreach(array_slice($service['features'], 0, 8) as $feature)
                                <li>{{ $feature }}</li>
                            @endforeach
                            @if(count($service['features']) > 8)
                                <li style="font-style: italic; color: #9ca3af;">+ {{ count($service['features']) - 8 }} additional features</li>
                            @endif
                        </ul>
                        @endif
                    </td>
                    <td class="text-right" style="font-weight: 600; color: #111827;">
                        {{ $quote->currency_symbol }}{{ number_format($service['price'], 2) }}
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>

    <!-- Totals -->
    <div class="clearfix">
        <div class="totals">
            <table>
                <tr class="total-row">
                    <td>Estimated Total ({{ $quote->currency }})</td>
                    <td>{{ $quote->currency_symbol }}{{ number_format($quote->total, 2) }}</td>
                </tr>
            </table>
        </div>
    </div>

    <!-- Notes -->
    @if($quote->notes)
    <div class="notes-section">
        <div class="notes-title">Additional Notes</div>
        <div class="notes-content">{{ $quote->notes }}</div>
    </div>
    @endif

    <!-- Validity Info -->
    <div class="validity-info">
        <p><strong>Validity:</strong> This estimate is valid until {{ $quote->valid_until->format('F d, Y') }}. Prices and availability are subject to change after this date.</p>
    </div>

    <!-- Footer -->
    <div class="footer">
        <p>Thank you for considering {{ config('app.name', 'Isolated Solutions Ltd') }} for your project.</p>
        <p>This estimate is provided for planning purposes. Final costs will be confirmed upon project scope review.</p>
        <p>For questions or to proceed, please contact us at {{ $company['email'] }} or {{ $company['phone'] }}.</p>
        <p style="margin-top: 12px; color: #d1d5db;">Document generated on {{ now()->format('F d, Y \a\t h:i A') }}</p>
    </div>
</body>
</html>

