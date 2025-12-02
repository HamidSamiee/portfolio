import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactSection .css";


const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  // تابع ارسال ایمیل
  const sendEmail = async (formData) => {
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          date: new Date().toLocaleDateString("fa-IR"),
          time: new Date().toLocaleTimeString("fa-IR"),
          user_ip: "دریافت خودکار",
          user_agent: navigator.userAgent,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      return { success: true, result };
    } catch (error) {
      return { success: false, error };
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'نام الزامی است';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'ایمیل الزامی است';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'ایمیل معتبر نیست';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'پیام الزامی است';
    } else if (formData.message.length < 10) {
      newErrors.message = 'پیام باید حداقل ۱۰ کاراکتر باشد';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      // استفاده از تابع sendEmail
      const result = await sendEmail(formData);
      
      if (result.success) {
        setMessage({ 
          text: '✅ پیام شما با موفقیت ارسال شد! به زودی پاسخ می‌دهم.', 
          type: 'success' 
        });
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        formRef.current.reset();
        
        // Auto hide success message after 5 seconds
        setTimeout(() => {
          setMessage({ text: '', type: '' });
        }, 5000);
      } else {
        throw new Error('ارسال ناموفق');
      }

    } catch (error) {
      console.error('Email error:', error);
      setMessage({ 
        text: '❌ خطا در ارسال پیام. لطفاً دوباره تلاش کنید.', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      key="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2>تماس با من</h2>
      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>بیایید با هم صحبت کنیم</h3>
          <p>
            اگر به همکاری علاقه‌مند هستید یا سوالی دارید، خوشحال می‌شوم
            از شما بشنوم.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span>ایمیل:</span>
              <a href="mailto:hamidsmoaser@gmail.com">
                hamidsmoaser@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span>گیت‌هاب:</span>
              <a
                href="https://github.com/HamidSamiee"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/HamidSamiee
              </a>
            </div>
            <div className="contact-item">
              <span>لینکدین:</span>
              <a
                href="https://linkedin.com/in/hamidsamiee"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/hamidsamiee
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">نام</label>
            <input 
              type="text" 
              id="name" 
              name="from_name"  // مهم: نام باید از name استفاده کنه
              value={formData.name}
              onChange={handleChange}
              required 
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">ایمیل</label>
            <input 
              type="email" 
              id="email" 
              name="from_email"  // مهم: نام باید از email استفاده کنه
              value={formData.email}
              onChange={handleChange}
              required 
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="message">پیام</label>
            <textarea 
              id="message" 
              name="message"      // مهم: نام باید message باشه
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required 
              className={errors.message ? 'error' : ''}
            ></textarea>
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>
          
          <button 
            type="submit" 
            className="btn primary" 
            disabled={loading}
          >
            {loading ? 'در حال ارسال...' : 'ارسال پیام'}
          </button>
          
          {message.text && (
            <div className={`form-message ${message.type}`}>
              {message.text}
            </div>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactSection;

