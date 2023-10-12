import rateLimit from "express-rate-limit";
import { mailOptions, transporter } from "../../../config/nodemailer";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

// Create DOMPurify object
const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

// Define rate limit object
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // limit each IP to 10 requests per windowMs
  trustProxy: true, // trust the X-Forwarded-For header
});

// Handler
const handler = async (req, res) => {
  // Apply rate limit middleware
  limiter(req, res, async () => {
    // If POST request
    if (req.method === "POST") {
      const data = req.body;
      if (!data || !data.name || !data.email || !data.message) {
        return res.status(400).send({ message: "Bad request" });
      }
      // Validate email address
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return res.status(400).send({ message: "Invalid email address" });
      }
      try {
        // Sanitize data
        const sanitizedData = {
          name: DOMPurify.sanitize(data.name),
          email: DOMPurify.sanitize(data.email),
          message: DOMPurify.sanitize(data.message),
        };
        // Send email
        await transporter.sendMail({
          ...mailOptions,
          text: `
                From: ${sanitizedData.name}
                Email: ${sanitizedData.email}
                Message: ${sanitizedData.message}
                
            `,
        });
        // Send response
        return res.status(200).json({ success: true });
      } catch (err) {
        console.log(err);
        return res.status(400).json({ message: err.message });
      }
    }
    // If not POST request
    return res.status(400).json({ message: "Bad request" });
  });
};

export default handler;
