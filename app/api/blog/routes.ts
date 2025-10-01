// import { NextApiRequest, NextApiResponse } from "next";
// import { prisma } from "@/lib/prisma";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "GET") {
//     const posts = await prisma.blog.findMany({ orderBy: { createdAt: "desc" } });
//     return res.json(posts);
//   }

//   res.status(405).json({ error: "Method not allowed" });
// }
