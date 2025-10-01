// import { NextApiRequest, NextApiResponse } from "next";
// import { prisma } from "@/lib/prisma";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "GET") {
//     const projects = await prisma.project.findMany();
//     return res.json(projects);
//   }

//   if (req.method === "POST") {
//     const { title, description, tech, link, repo } = req.body;
//     const newProject = await prisma.project.create({
//       data: { title, description, tech, link, repo },
//     });
//     return res.json(newProject);
//   }

//   res.status(405).json({ error: "Method not allowed" });
// }
