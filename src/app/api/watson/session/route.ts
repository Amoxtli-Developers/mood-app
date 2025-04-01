import { NextResponse } from "next/server";

export async function POST() {
    try {
        // 1. Build the endpoint for creating a session
        //    Make sure the version parameter matches the date you need (from the IBM docs).
        //    If your environment ID is actually the same as your "assistant ID," just use that.
        const endpoint = `${process.env.WATSON_URL}/v2/assistants/${process.env.WATSON_ASSISTANT_ID}/sessions?version=2021-11-27`;

        // 2. Create Basic Auth header from your API key
        const authHeader = Buffer.from(
            `apikey:${process.env.WATSON_API_KEY}`
        ).toString("base64");

        // 3. Call the Watson Assistant session endpoint
        const watsonRes = await fetch(endpoint, {
            method: "POST",
            headers: {
                Authorization: `Basic ${authHeader}`,
                "Content-Type": "application/json",
            },
        });

        // 4. Check for errors
        if (!watsonRes.ok) {
            const errorData = await watsonRes.json();
            return NextResponse.json(
                { error: errorData },
                { status: watsonRes.status }
            );
        }

        // 5. Parse and return the session data
        const data = await watsonRes.json();
        // data should look like { session_id: "xxxxxx" }
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error creating Watson Assistant session:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
