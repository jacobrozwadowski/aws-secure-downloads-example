# Cloudflare R2 / AWS File Downloader (Next.js)

This project is a simple Next.js application that allows users to download files securely from Cloudflare R2 or AWS S3 using signed URLs. It demonstrates how to integrate Cloudflare R2 with Next.js (App Router) to generate signed URLs for downloading large files. This solution works well for serving files that are stored privately in Cloudflare R2 without exposing them to the public directly.

## Features

- Generate **signed URLs** for files stored in Cloudflare R2.
- **Secure** file download via temporary, time-limited URLs. (adjustable in the code)
- Full integration with Next.js App router and API routes.
- TypeScript support for type safety.
- Easy-to-implement frontend with dynamic file download.

## Prerequisites

Before running the project locally, ensure you have the following prerequisites:

- **Node.js** (version 20 or higher)
- **Cloudflare R2 / AWS S3** account and access keys
- **Git** to clone the repository

## Cloudflare R2 Setup

1. **Create a R2 Bucket**:

- Go to the Cloudflare dashboard.
- Create an R2 bucket to store your files.
- Generate access keys (Access Key ID & Secret Access Key)

2. **Environment Variables:** Create a `.env.local` file at the root of your project and add the following environment variables (replace with your actual values):

```
R2_ACCESS_KEY=your_r2_access_key
R2_SECRET_KEY=your_r2_secret_key
R2_BUCKET_NAME=your_bucket_name
R2_ENDPOINT=your_r2_uri
```

# Getting Started

## Clone the Repository

Start by cloning the repository to your local machine.

```
git clone https://github.com/jacobrozwadowski/aws-download-nextjs-app.git
cd aws-download-nextjs-app
```

## Install Dependencies

Install the required dependencies using npm:

```
npm install
```

## Run the development server

Once dependencies are installed, you can start the development server:

```
npm run dev
```

This will start the server on http://localhost:3000.

# How it works

This project is structured as follows:

- **API Route** (`/api/getsignedurl`): This API route generates a signed URL for downloading a file securely whilst it being private from R2 or S3. The url is valid for a limited time (5 minutes by default).
- **Frontend** (`download-button.tsx`): A React component that triggers the download by fetching the signed URL and initiating the download in the browser.
