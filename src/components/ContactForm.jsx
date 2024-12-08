function ContactForm() {
  return (
    <form>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col grow">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="px-5 py-3 outline-none border border-gray-300 focus:border-sky-400 rounded"
              required
            />
          </div>
          <div className="flex flex-col grow">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="px-5 py-3 outline-none border border-gray-300 focus:border-sky-400 rounded"
              required
            />
          </div>
        </div>
        <div className="flex flex-col grow">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="px-5 py-3 outline-none border border-gray-300 focus:border-sky-400 rounded"
            required
          />
        </div>
        <div className="flex flex-col grow">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="px-5 py-3 outline-none border border-gray-300 focus:border-sky-400 rounded"
            required
          ></textarea>
        </div>
        <div className="flex justify-end gap-3">
          <button
            type="submit"
            className="py-3 px-5 bg-sky-900 text-white rounded-md hover:bg-sky-700 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
