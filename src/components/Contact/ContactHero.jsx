import { contactList } from "../../constants/text"

const ContactHero = () => {
    return (
        <section className="flex flex-col sm:px-10 px-5 mt-32 relative screen-max-width">
            <div className="flex flex-col gap-4">
                <h1 className="md:text-[3.5rem] text-center text-3xl font-[400]">Contact us today</h1>
                <p className="text-[#babcc6] text-center md:text-[1.25rem] text-[1.05rem]">How can we help you today?</p>
            </div>
            <div className="md:py-[6rem] py-[3rem] screen-max-width sm:px-0 px-10 flex sm:flex-row flex-col sm:items-start items-center sm:gap-8 gap-6 justify-between w-full sm:flex-wrap">
                {
                    contactList.map((contact, index) => {
                        return (
                            <div key={index} className="flex flex-col items-start w-[300px] md:gap-4 gap-4 sm:border-none border-l border-blue-500 pl-2">
                                <div className="flex flex-col gap-2">
                                    <img src={contact.icon} alt={contact.title} className="md:w-[30px] w-[25px]" />
                                    <h2 className="text-[#5f5f61] text-left md:text-[1.4rem] text-[1rem]">{contact.title}</h2>
                                    <p className="text-[#babcc6] text-[0.8rem] text-left">{contact.description}</p>  
                                </div>
                                <a href={contact.link} className="text-black text-[0.8rem]">{contact.info}</a>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ContactHero