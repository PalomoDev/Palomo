// components/ContactForm.tsx

import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isFormValid, setIsFormValid] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(5, 'Name must be at least 5 characters long')
                .required('Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            subject: Yup.string()
                .min(10, 'Subject must be at least 10 characters long')
                .required('Subject is required'),
            message: Yup.string()
                .min(20, 'Message must be at least 20 characters long')
                .required('Message is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            setFormData(values);
            setModalOpen(true);
            resetForm();
        },
    });

    useEffect(() => {
        // Проверяем, прошла ли форма валидацию
        if (
            formik.errors.name ||
            formik.errors.email ||
            formik.errors.subject ||
            formik.errors.message ||
            !formik.touched.name ||
            !formik.touched.email ||
            !formik.touched.subject ||
            !formik.touched.message
        ) {
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
        }
    }, [formik.errors, formik.touched]);

    const closeModal = () => setModalOpen(false);

    return (
        <>
            <form onSubmit={formik.handleSubmit} className={"w-full mx-auto p-4"}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-bold mb-2 uppercase">your Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className="w-full px-3 py-2 border rounded"
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <p className="text-red-500 text-sm">{formik.errors.name}</p>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-bold mb-2 uppercase">your Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className="w-full px-3 py-2 border rounded"
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <p className="text-red-500 text-sm">{formik.errors.email}</p>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-bold mb-2 uppercase">Subject</label>
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.subject}
                        className="w-full px-3 py-2 border rounded"
                    />
                    {formik.touched.subject && formik.errors.subject ? (
                        <p className="text-red-500 text-sm">{formik.errors.subject}</p>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-bold mb-2 uppercase">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        className="w-full px-3 py-2 border rounded"
                    />
                    {formik.touched.message && formik.errors.message ? (
                        <p className="text-red-500 text-sm">{formik.errors.message}</p>
                    ) : null}
                </div>

                <div className={'text-center'}>
                    <button
                        type="submit"
                        disabled={!isFormValid} // Заблокировать кнопку, если форма недопустима
                        className={`${isFormValid ? 'opacity-100' : 'opacity'}-20  bg-gray-500 mt-10 mb-5 text-white py-2 h-[50px] px-20 rounded ${isFormValid ? 'hover:bg-red-500' : ''} uppercase`}
                    >
                        Submit
                    </button>
                </div>
            </form>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
                        <h2 className="text-xl font-bold mb-4">Form Submission</h2>
                        <p><strong>Name:</strong> {formData.name}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Subject:</strong> {formData.subject}</p>
                        <p><strong>Message:</strong> {formData.message}</p>
                        <p>
                            Thank you for your message!

                            I have received your message and will contact you as soon as possible. If you have any urgent questions, please do not hesitate to contact me directly via telegram or whatsapp

                            With best wishes,
                            Sergio Palomo
                        </p>
                        <button onClick={closeModal} className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactForm;
