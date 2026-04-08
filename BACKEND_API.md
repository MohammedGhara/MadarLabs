# Backend API Specification

This document describes the API your backend must implement for the MadarLabs frontend to work fully.

## Lead Form Submission

**Endpoint:** `POST /api/leads`  
**Content-Type:** `application/json`

### Request Body

```json
{
  "fullName": "string",
  "businessType": "string",
  "serviceNeeded": "string",
  "budgetRange": "string",
  "whatsappNumber": "string",
  "instagramUsername": "string (optional)",
  "message": "string (optional)"
}
```

### Example Request

```json
{
  "fullName": "John Doe",
  "businessType": "Restaurant",
  "serviceNeeded": "Business Website",
  "budgetRange": "$1,500 - $3,500",
  "whatsappNumber": "+972501234567",
  "instagramUsername": "@johndoe",
  "message": "I need a website for my new restaurant."
}
```

### Success Response

**Status:** `200` or `201`  
**Content-Type:** `application/json`

```json
{
  "success": true,
  "message": "Thank you! We'll be in touch soon.",
  "id": "optional-lead-id"
}
```

### Error Response

**Status:** `4xx` or `5xx`  
**Content-Type:** `application/json`

```json
{
  "message": "Error description for the user"
}
```

The frontend displays `message` to the user on error. If your backend returns a different structure, the frontend will show the status text or a generic error message.

## Configuration

Set `VITE_API_BASE_URL` in your `.env` to your backend URL (e.g. `https://api.yourdomain.com`).  
The frontend will send requests to `{VITE_API_BASE_URL}/api/leads`.

## CORS

Ensure your backend allows requests from your frontend origin. For production:

- Add your frontend domain to CORS allowed origins
- Allow `Content-Type` and `Authorization` headers if needed
- Allow `POST` method for `/api/leads`
