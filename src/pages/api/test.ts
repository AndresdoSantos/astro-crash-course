export async function GET() {
  return new Response(
    JSON.stringify({ message: 'Houston, we have a problem!' }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}