import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        // 1. Parse incoming request data (the user’s message and sessionId)
        const { message, sessionId } = await request.json();

        if (!sessionId) {
            return NextResponse.json(
                { error: "Session ID is required" },
                { status: 400 }
            );
        }

        // 2. Build the Watson Assistant endpoint including the session ID
        const endpoint = `${process.env.WATSON_URL}/v2/assistants/${process.env.WATSON_ASSISTANT_ID}/sessions/${sessionId}/message?version=2024-08-25`;

        // 3. Prepare the request payload
        const payload = {
            input: { text: message },
        };

        // 4. Create Basic Auth header using your API key
        const authHeader = Buffer.from(
            `apikey:${process.env.WATSON_API_KEY}`
        ).toString("base64");

        // 5. Send the request to Watson Assistant
        const watsonRes = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${authHeader}`,
            },
            body: JSON.stringify(payload),
        });

        if (!watsonRes.ok) {
            const errorData = await watsonRes.json();
            return NextResponse.json(
                { error: errorData },
                { status: watsonRes.status }
            );
        }

        // 6. Return the successful data
        const data = await watsonRes.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error calling Watson Assistant:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
