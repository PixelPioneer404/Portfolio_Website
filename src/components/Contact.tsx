import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { LoadingSpinner } from './ui/LoadingSpinner';
import { FormError } from './ui/FormError';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous status
    setSubmitStatus('idle');
    
    if (!validateForm()) return;
    
    // Start submitting
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'service_sudul45',
        'template_me5pv3q',
        formRef.current!,
        'tz7YrArNb_QP7kc1i'
      );
      
      // On successful submission
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Optional: Reset to idle after a few seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      // On submission failure
      setSubmitStatus('error');
      
      // Optional: Reset to idle after a few seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      // Always set isSubmitting to false
      setIsSubmitting(false);
    }
  };

  const getButtonContent = () => {
    if (isSubmitting) {
      return (
        <div className="flex items-center justify-center space-x-2">
          <LoadingSpinner />
          <span>Sending...</span>
        </div>
      );
    }
    
    if (submitStatus === 'success') {
      return 'Message sent!';
    }
    
    if (submitStatus === 'error') {
      return 'Failed to send message';
    }
    
    return 'Send Message';
  };

  return (
    <section id="contact" className="py-20 bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) {
                    setErrors({ ...errors, name: undefined });
                  }
                }}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                disabled={isSubmitting}
              />
              {errors.name && <FormError message={errors.name} />}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) {
                    setErrors({ ...errors, email: undefined });
                  }
                }}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                disabled={isSubmitting}
              />
              {errors.email && <FormError message={errors.email} />}
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={(e) => {
                  setFormData({ ...formData, subject: e.target.value });
                  if (errors.subject) {
                    setErrors({ ...errors, subject: undefined });
                  }
                }}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                disabled={isSubmitting}
              />
              {errors.subject && <FormError message={errors.subject} />}
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) {
                    setErrors({ ...errors, message: undefined });
                  }
                }}
                rows={4}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                disabled={isSubmitting}
              />
              {errors.message && <FormError message={errors.message} />}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 rounded-full transition-colors duration-200 ${
                submitStatus === 'success'
                  ? 'bg-green-600 hover:bg-green-700'
                  : submitStatus === 'error'
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-blue-600 hover:bg-blue-700'
              } text-white`}
            >
              {getButtonContent()}
            </button>
          </motion.form>

          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  className="mt-12 flex justify-center space-x-6"
>
  {[
    { icon: Github, link: 'https://github.com/PixelPioneer404' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/rajbeer-saha-104a4b32b' },
    { icon: Instagram, link: 'https://www.instagram.com/raj_vir202' },
  ].map((social, index) => (
    <motion.a
      key={index}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
    >
      <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
    </motion.a>
  ))}
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;