// import { NextApiRequest, NextApiResponse } from "next";
// import { prisma } from "@/lib/prisma";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { name, email, content } = req.body;
//     const message = await prisma.message.create({
//       data: { name, email, content },
//     });
//     return res.json({ success: true, message });
//   }

//   res.status(405).json({ error: "Method not allowed" });
// }
