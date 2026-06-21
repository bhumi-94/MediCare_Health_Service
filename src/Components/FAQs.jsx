import React  from "react"





const FAQs = () => {


    const [openIndex, setOpenIndex] = React.useState(null)

    const faqsData = [
        {
            question: 'How do I book an appointment?',
            answer: "Simply search for a doctor by specialty or name, choose an available time slot, fill in your details, and confirm your booking. You'll receive a confirmation via email and SMS."
        },
        {
            question: 'Can I consult a doctor online via video?',
            answer: 'Yes! MediCare offers video consultations with verified doctors. You can book a video slot the same way as an in-person appointment, and the doctor will call you at the scheduled time.'
        },
        {
            question: 'Are the doctors verified?',
            answer: 'All doctors on MediCare go through a rigorous verification process, including medical license checks, qualification verification, and background checks before being listed on our platform.'
        },
        {
            question: 'What payment methods are accepted?',
            answer: 'We accept UPI, credit/debit cards, net banking, and popular wallets. All transactions are secured with 256-bit SSL encryption.'
        },
        {
            question: 'Can I cancel or reschedule an appointment?',
            answer: 'Yes! You can cancel or reschedule your appointment from the My Appointments section. Please note that cancellation and rescheduling policies may vary depending on the doctor.'
        }
    ]
    return (
        <>
            
            <div className='flex flex-col items-center text-center text-slate-800 px-3 mt-20'>
                <p className='text-base font-medium text-blue-600'>FAQ</p>
                <h1 className='text-3xl md:text-4xl font-semibold mt-2'>Frequently Asked Questions</h1>
                <p className='text-sm text-slate-500 mt-4 max-w-sm'>
                    Proactively answering FAQs boosts user confidence and cuts down on support tickets.
                </p>
                <div className='max-w-xl w-full mt-6 flex flex-col gap-4 items-start text-left'>
                    {faqsData.map((faq, index) => (
                        <div key={index} className='flex flex-col items-start w-full'>
                            <div className='flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-blue-100 to-white border border-blue-200 p-4 rounded' onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                <h2 className='text-sm'>{faq.question}</h2>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className={`text-sm text-slate-500 px-4 transition-all duration-500 ease-in-out ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default FAQs;