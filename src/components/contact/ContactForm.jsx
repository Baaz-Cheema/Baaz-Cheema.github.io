import { useState } from "react";

export default function ContactForm({ name, email, message, handleChange }) {
    const [status, setStatus] = useState('')

    async function submitForm(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        formData.append("access_key", '7963425b-1e56-4965-b543-7d4754359ea6');
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        setStatus('loading')
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());
        if (res.success) {
            setStatus('success')
        } else {
            setStatus('error')
        }
    }


    return (
        <form onSubmit={submitForm} className="max-w-[320px] mx-auto md:my-6">
            <div className="mb-5">
                <label className="block mb-2" id="name" required>_name:</label>
                <input value={name} onChange={handleChange} name="name" className="outline-none w-full p-2 bg-[#011221] border-2 border-custom rounded-lg" id="name" type="text" required />
            </div>
            <div className="mb-5">
                <label className="block mb-2" id="email" >_email:</label>
                <input value={email} onChange={handleChange} name="email" className="outline-none w-full p-2 bg-[#011221] border-2 border-custom rounded-lg" id="email" type="email"
                    required />
            </div>
            <div className="mb-3">
                <label className="block mb-2" id="message">_message:</label>
                <textarea value={message} onChange={handleChange} name="message" className="outline-none custom-scroll resize-none w-full h-[9rem] p-2 bg-[#011221] border-2 border-custom rounded-lg" id="message" type="textarea" required />
            </div>
            <div className="flex items-center gap-3">
                <button type="submit" disabled={status === 'loading'} className="bg-[#1e2d3d] p-1 px-3 text-[#FFFFFF] rounded-md disabled:opacity-55">submit-message</button>
                {status === 'loading' && < i className="ri-loader-4-line text-2xl leading-none text-[#FFFFFF] animate-spin"></i>}
                {status === 'success' &&
                    <span className="flex text-[#FFFFFF] gap-2 items-center text-[15px]">
                        <i className="ri-check-fill text-green-400 text-2xl leading-none"></i>Sent</span>}
                {status === 'error' &&
                    <span className="flex text-[#FFFFFF] gap-2 items-center text-[15px]">
                        <i className="ri-close-fill text-red-400 text-2xl leading-none"></i>Failed</span>}
            </div>

        </form >
    )
}