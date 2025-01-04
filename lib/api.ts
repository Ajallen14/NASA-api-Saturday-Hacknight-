const NASA_API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;
const NASA_API_BASE = 'https://api.nasa.gov/mars-photos/api/v1/rovers';

export async function fetchRoverPhotos({
  rover,
  sol,
  camera,
  page = 1,
}: {
  rover: string;
  sol?: number;
  camera?: string;
  page?: number;
}) {
  try {
    const params = new URLSearchParams({
      api_key: NASA_API_KEY || '',
      page: page.toString(),
      ...(sol && { sol: sol.toString() }),
      ...(camera && { camera: camera.toLowerCase() }),
    });

    const response = await fetch(
      `${NASA_API_BASE}/${rover.toLowerCase()}/photos?${params}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch rover photos');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching rover photos:', error);
    throw error;
  }
}