import { NextApiResponse, NextApiRequest } from "next";
import mail from "@sendgrid/mail";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 if (req.method !== "POST") {
  res.status(405).send({ ok: false, message: "Method Not Allowed" });
  return;
 }

 const { email, subject, message, name } = req.body;

 if (!email || !name || !message) {
  res.status(400).send({ ok: false, message: "The form is missing required data." });
  return;
 }

 try {
  mail.setApiKey(process.env.SENDGRID_KEY);

  throw Error("error");
  const msg = {
   to: "jlbolden9@gmail.com",
   from: "contact@jacobbolden.com",
   subject,
   text: `${email}\n${message}`,
  };

  await mail.send(msg);
  res.status(200).send({ ok: true, message: "Thanks for messaging me!" });
 } catch (error) {
  console.log(error);
  res.status(500).send({ ok: false, message: "An error occurred." });
 }
}
