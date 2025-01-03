import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { items } = req.body;

    // Ensure items is not empty or invalid
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Invalid input data: "items" is required.' });
    }

    // Easypost API URL and API Key (use environment variable for security)
    const easypostAPIKey = process.env.EASYPOST_API_KEY;

    // If no API key is found, return an error
    if (!easypostAPIKey) {
      return res.status(500).json({ error: 'Easypost API key is missing' });
    }

    // Make the request to Easypost API
    const response = await fetch('https:airposts1.p.rapidapi.com/api/v1/airport_detail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${easypostAPIKey}`, // Include the API key in the request header
      },
      body: JSON.stringify({ items }),
    });

    // Check if the API responded successfully
    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData.message || 'Error calculating shipping cost' });
    }

    // Parse the API response and send the data back
    const data = await response.json();
    return res.status(200).json({ cost: data.shippingCost });

  } catch (error) {
    console.error('Error calculating shipping cost:', error);
    return res.status(500).json({ error: 'Failed to calculate shipping cost' });
  }
}

