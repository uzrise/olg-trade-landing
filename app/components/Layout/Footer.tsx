'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import './footer.css';
import { Logo } from '@app/components/Logo/Logo';
import testIds from '@app/utils/test-ids';
import emailjs from 'emailjs-com';

import { Mail, Phone } from './NavBar/svg';

const Footer: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const maxChars = 200;

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (value.length <= maxChars) {
      setMessage(value);
    }
  };

  const isFormValid = () => {
    return (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      email.trim() !== '' &&
      message.trim() !== ''
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const templateParams = {
      firstName,
      lastName,
      email,
      message,
    };

    try {
      // await emailjs.send(
      //   'service_uasxscq', // Replace with your EmailJS service ID
      //   'template_4vr963s', // Replace with your EmailJS template ID
      //   templateParams
      // );
      // .then(() => {
      //   setEmail(''), setFirstName('');
      //   setLastName('');
      //   setMessage('');
      // });

      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <footer
      className="m-h-56 leading-7 sm:p-14 font-site"
      data-testid={testIds.LAYOUT.FOOTER}
    >
      <div id="contact" className="flex flex-col sm:flex-row">
        <div className="basis-2/3 flex justify-between flex-col bg-blue-site text-white p-14 ">
          <div>
            <h2 className="text-2xl mb-2 sm:text-5xl font-bold">CONTACT US</h2>
            <p>
              Leave your contact information and we will get back to you to
              discuss our partnership!
            </p>
          </div>
          <h3 className="text-4xl my-10">info@mysite.com</h3>
        </div>
        <div className="basis-2/3 bg-gray-200 p-14 text-center">
          <div className="contact-us-card mx-auto mb-[30px] rounded-[32px] !text-white bg-[#303030] p-8">
            <h2 className="text-4xl">Get in Touch</h2>
            <p className="mt-3 text-sm leading-[18px] text-[#CCCCCC]">
              You can reach us anytime
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-[24px] flex flex-col gap-5 "
            >
              <div className="flex flex-wrap gap-4 ">
                <input
                  placeholder="First Name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="h-[52px] w-full rounded-[50px] border border-solid border-[#303030] bg-[#161616] px-5 py-4 text-[14px] outline-none placeholder:text-[#545454] "
                />
                <input
                  placeholder="Last Name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="h-[52px] w-full rounded-[50px] border border-solid border-[#303030] bg-[#161616] px-5 py-4 text-[14px] outline-none placeholder:text-[#545454] "
                />
              </div>
              <div className="relative flex">
                <Mail />

                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-[52px] w-full rounded-[50px] border border-solid border-[#303030] bg-[#161616] px-5 py-4 pl-[54px] text-[14px] outline-none placeholder:text-[#545454]"
                />
              </div>

              <div className="relative">
                <textarea
                  value={message}
                  onChange={handleTextareaChange}
                  className="h-[160px] w-full rounded-[24px] border border-solid border-[#303030] bg-[#161616] p-5 outline-none placeholder:text-[#545454]"
                  placeholder="How can we help?"
                />
                <p className="absolute bottom-[20px] right-[20px] text-sm text-[#545454]">
                  {message.length}/{maxChars}
                </p>
              </div>
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`h-[52px] rounded-[50px] bg-[#2859b6]  text-base font-semibold text-white disabled:!bg-[#2A2A2A] disabled:!text-[#545454] ${
                  !isFormValid() && '!bg-[#2A2A2A] !text-[#545454]'
                }`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center sm:text-xs mt-6">
        <Logo />
        <p className="font-default mb-10">© 2024 OLG-Trade</p>
      </div>
    </footer>
  );
};

export default Footer;
