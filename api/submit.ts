export default async function handler(req, res) {
  if (req.method === "POST") {
    const formData = req.body;

    console.log("Form Data:", formData);

    return res.status(200).json({ message: "Form submitted successfully!" });
  }

  res.status(405).json({ error: "Method Not Allowed" });
}
