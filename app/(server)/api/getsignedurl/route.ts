import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

interface SignedUrlResponse {
    url: string;
}

export async function GET(req: Response): Promise<Response> {
    const { searchParams } = new URL(req.url);
    const fileName = searchParams.get('fileName');

    if(!fileName) {
        return new Response("File name is required", { status: 400 });
    }

    const s3Client = new S3Client({
        region: 'auto',
        endpoint: process.env.R2_ENDPOINT!,
        credentials: {
            accessKeyId: process.env.R2_ACCESS_KEY!,
            secretAccessKey: process.env.R2_SECRET_KEY!
        },
        forcePathStyle: true,
    });

    try {
        const command = new GetObjectCommand({
            Bucket: process.env.R2_BUCKET_NAME!,
            Key: fileName,
        });


        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 60 * 5})

        const responseBody: SignedUrlResponse = { url: signedUrl};
        return new Response(JSON.stringify(responseBody), {
            status: 200, // OK
            headers: { "Content-Type": "application/json"},
        });
    } catch (error: any) {
        console.error('Error generating signed URL', error);
        return new Response("Error generating signed URL", { status: 500 });
    }
}