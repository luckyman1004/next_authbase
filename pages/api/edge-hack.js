// export default (req) => {
//   return {
//     name: `Hello, from ${req.url} I'm now an Edge Function!`,
//   };
// };

// export const config = {
//   runtime: 'experimental-edge',
// };

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req) {
  return new Response(
    JSON.stringify({
      status: 'working aight!',
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}
