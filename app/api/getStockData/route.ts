import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // Enable static caching with revalidation

const API_KEY = process.env.API_NINJAS_KEY;

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get("symbol");

  if (!symbol) {
    return NextResponse.json({ error: "No [symbol] provided" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://api.api-ninjas.com/v1/stockprice?ticker=${symbol}`, {
      headers: {
        "X-Api-Key": API_KEY || "",
      },
      next: { revalidate: 60 }, // Revalidate cached data every 60 seconds
    });

    if (!res.ok) {
      console.error(`Failed to fetch data for ${symbol}. Status: ${res.status}`);
      return NextResponse.json({ error: `Failed to fetch data` }, { status: res.status });
    }

    const data = await res.json();
    console.log("API Response:", data); // Debugging the API response

    if (!data || Object.keys(data).length === 0) {
      return NextResponse.json({ error: "No data found for the provided symbol" }, { status: 404 });
    }

    const formattedData = {
      ticker: data.ticker,
      name: data.name,
      price: data.price,
      exchange: data.exchange,
      currency: data.currency,
      updated: new Date(data.updated * 1000).toLocaleString(),
    };

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ error: "Unexpected error occurred" }, { status: 500 });
  }
}
