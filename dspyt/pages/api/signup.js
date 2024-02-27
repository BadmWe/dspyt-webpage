import mailchimp from "@mailchimp/mailchimp_marketing";

export default async function handler(req, res) {
  const { email_address, status } = req.body;

  mailchimp.setConfig({
    apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API,
    server: "us21",
  });

  try {
    await mailchimp.lists.addListMember(
      process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID,
      {
        email_address,
        status,
      }
    );
  } catch (err) {
    return res.status(400).send({ error: true });
  }

  return res.json({ success: true });
}
