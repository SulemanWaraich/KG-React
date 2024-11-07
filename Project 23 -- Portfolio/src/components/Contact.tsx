import emailjs from '@emailjs/browser';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  message: string;
};


function Contact() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicId = import.meta.env.VITE_PUBLIC_ID;

    console.log(serviceId, templateId, publicId);
    

    

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: 'Muhammad Suleman',
      message: data.message
    };

    try {
      const res = await emailjs.send(serviceId, templateId, templateParams, publicId);
      console.log('Email sent successfully!', res);
      alert('Your message sent successfully!');
      reset(); // Clears the form fields
    } catch (err) {
      alert('Message failed to send, please try again!');
      console.log('Error:', err);
    }
  };

  return (
    <div className="w-screen min-h-screen p-5 bg-gray-100">
      <h1 className="md:text-4xl 2xl:w-[200px] text-3xl border-b-4 pb-2 mb-10 mt-4 border-sky-400 mx-auto md:w-[220px] w-[180px] font-bold">
        Contact Me
      </h1>
      <form className="flex flex-col justify-start mx-auto lg:w-3/6 md:w-4/6 w-3/4 items-start p-10 rounded-lg space-y-5 bg-white shadow-lg md:h-[80vh] overflow-y-auto border-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="name" className="text-xl">Name</label>
          <input type="text" className="border-2 rounded-lg p-2 md:text-lg text-sm"  placeholder="Enter Your Name"  {...register("name", { required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters long" } })}/>
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col w-full space-y-2">
          <label htmlFor="email" className="text-xl">Email</label>
          <input type="email" className="border-2 rounded-lg p-2 md:text-lg text-sm"  placeholder="Enter Your Email" {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email address"
              }
            })}/>
             {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col w-full space-y-2">
          <label htmlFor="message" className="text-xl">Message</label>
          <textarea rows={4} className="border-2 rounded-lg p-2 md:text-lg text-sm" placeholder="Enter Your Message"  {...register("message", { required: "Message is required" })}></textarea>
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}
        </div>

    <div className="mx-auto bg-sky-400 md:py-4 md:px-6 px-3 py-2 rounded-lg">
        <button className="text-white font-semibold">Send Message</button>
    </div>
      </form>
    </div>
  );
}

export default Contact;
