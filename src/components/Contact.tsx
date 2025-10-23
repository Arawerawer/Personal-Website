import "@/styles/contact.scss";
import NavigationCircles from "./NavigationCircles";
import { useState } from "react";

import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 驗證表單
    if (!name.trim()) {
      toast.error("請輸入您的姓名");
      return;
    }
    if (!email.trim()) {
      toast.error("請輸入您的 Email");
      return;
    }
    if (!message.trim()) {
      toast.error("請輸入訊息內容");
      return;
    }

    const serviceId = "service_dozf6td";
    const templateId = "template_noexgwx";
    const publicKey = "CTaym928qXFsVhH-R";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Amos",
        message: message,
      },
    };

    try {
      toast.loading("正在發送中...");
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      toast.dismiss();
      toast.success("訊息發送成功！");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
      toast.dismiss();
      toast.error("發送失敗，請稍後再試");
    }
  };

  return (
    <div id="contact" className="contact-section">
      <h2 className="contact-title">聯絡我</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="請輸入您的姓名"
          className="contact-email-name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="請輸入您的email"
          className="contact-email-name-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="請輸入訊息"
          className="contact-message-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <input type="submit" value="傳送" className="contact-submit-button" />
      </form>

      <NavigationCircles section="contact" />
    </div>
  );
};

export default Contact;
