import React from 'react';
import './Contact.css';
import Layout from '../components/Layout';

function Contact() {
  return (
    <Layout>
      <div className='main'>
        <div className='background-texture'>
          <div className='main'>
            <div className="contact-container">
              <div className="form-section">
                <h2>Let's work together</h2>
                <p>"Have a vision? Let’s make it a reality. Reach out to discuss how we can work together on your next project, from design to deployment."</p>
                <form>
                  <div className="input-row">
                    <input type="text" placeholder="Firstname" />
                    <input type="text" placeholder="Lastname" />
                  </div>
                  <div className="input-row">
                    <input type="email" placeholder="Email address" />
                    <input type="tel" placeholder="Phone number" />
                  </div>
                  <div className="input-row">
                    <select>
                      <option>Select a service</option>
                      <option>Frontend</option>
                      <option>Backend</option>
                    </select>
                  </div>
                  <textarea placeholder="Type your message here."></textarea>
                  <button type="submit">Send message</button>
                </form>
              </div>
              <div className="contact-info">
                <div className="info-item">
                  <span>📞</span>
                  <p>Phone<br />+91 9321635898</p>
                </div>
                <div className="info-item">
                  <span>📧</span>
                  <p>Email<br />245yadavjii@gmail.com</p>
                </div>
                <div className="info-item">
                  <span>📍</span>
                  <p>Address<br />Andheri (E), Mumbai 400069</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
  