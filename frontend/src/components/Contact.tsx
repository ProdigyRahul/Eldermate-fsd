import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
// import { Alert, AlertDescription } from '@/components/ui/alert';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-[#fdf9f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600">
            We're here to help and answer any questions you might have
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 lg:pr-12">
            <div className="text-2xl font-semibold text-gray-900 mb-6">
              Get in Touch
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                <p className="mt-1 text-lg text-gray-600">
                  1-800-ELDERMATE<br />
                  Available 24/7
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-lg text-gray-600">
                  support@eldermate.com<br />
                  We reply within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Office</h3>
                <p className="mt-1 text-lg text-gray-600">
                  123 Care Street<br />
                  San Francisco, CA 94103
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                <p className="mt-1 text-lg text-gray-600">
                  Monday - Friday: 9:00 AM - 8:00 PM<br />
                  Saturday - Sunday: 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm text-lg"
                  placeholder="Melita Castelino"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm text-lg"
                  placeholder="msc@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm text-lg"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm text-lg"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full #517f68 text-white px-6 py-4 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* {formStatus === 'success' && (
              <Alert className="mt-6 bg-green-50 border-green-200">
                <AlertDescription className="text-green-800">
                  Thank you for your message! We'll get back to you soon.
                </AlertDescription>
              </Alert>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;