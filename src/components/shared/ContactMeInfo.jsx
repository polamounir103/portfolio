function ContactMeInfo({ title, info }) {
  return (
    <div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-gray-900 text-md">{info}</p>
    </div>
  );
}

export default ContactMeInfo;
