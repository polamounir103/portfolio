import SectionTitle from "./shared/SectionTitle";
import ContactMeInfo from "./shared/ContactMeInfo";
import ContactForm from "./ContactForm";
import mailImg from "../assets/images/mail.jpg";

export default function Contact() {
  return (
    <section className="bg-stone-100" id="contact">
      <div className="p-5 py-20 md:p-20 lg:p-24 flex flex-col gap-10 ">
        <div>
          <SectionTitle title="Contact Me" />
        </div>
        <p className="text-xl">I will have the pleasure of contact me.</p>
        <div className="flex flex-col xl:flex-row gap-5 items-start">
          <div className="flex flex-col gap-10 grow rounded-md contact-shadow p-10 w-full">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <div>**</div>
                <div>
                  <ContactMeInfo title="Address" info="Faisal, Giza, Egypt" />
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>**</div>
                <div>
                  <ContactMeInfo title="Contact Me" info="+2 01068550976" />
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>**</div>
                <div>
                  <ContactMeInfo
                    title="Email Me"
                    info="polamounir103@gmail.com"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <img src={mailImg} alt="mail" className="mail-img h-60 aspect-video" />
              </div>
            </div>
          </div>
          <div className="grow rounded-md contact-shadow p-10 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
