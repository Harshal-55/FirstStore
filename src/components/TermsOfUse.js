import React from 'react'
import Navbar from './Navbar';
import IndexSidebar from './IndexSidebar';

const TermsOfUse = () => {
    const sections = [
        { id: "booking", label: "Booking Services" },
        { id: "payment", label: "Payment Services" },
        { id: "cancel", label: "Cancellation and Rescheduling" },
        { id: "refund", label: "Return and Refund Policy" },
        { id: "responsibility", label: "User Responsibilities" },
        { id: "service", label: "Service Limitations" },
        { id: "dispute", label: "Liability and Dispute Reputation" },
        { id: "contact", label: "Contact Our Team" },
      ];
  return (
    <div>
        <Navbar />
        <IndexSidebar 
        sections={sections}
        className="mt-24 ml-12"
        />
        <main className='text-[#081d6e] absolute top-24 flex flex-col gap-4 ml-96 left-20 w-[55%]'>
            <h1 className='font-noto text-3xl font-bold border-b-2 border-black pb-4'>
                Terms and Conditions
            </h1>
            <h2 className='text-2xl font-semibold'>FirstStore</h2>
            <p className='text-black'>
                FirstStore is your ultimate destination for personalized e-commerce solutions. We offer custom store setups, product listings, and order management services tailored to your business needs. Our platform allows you to get personalized store designs, seamless integrations, and full-scale e-commerce support. By using FirstStore, you agree to our Terms & Conditions, which govern your use of our website and services. Please review them carefully before proceeding.
            </p>
            <h2 id='booking' className='text-2xl font-semibold scroll-mt-40'>Booking Services</h2>
            <p className='text-black'>
                We may collect the following types of information:
                <ul className='list-disc ml-5'>
                    <li>Personal Information: Name, email address, shipping address, phone number, and payment details when you create an account, place an order, or contact us.</li>
                    <li>Usage Data: Information about how you interact with our platform, including pages visited, links clicked, and actions taken within the app or website.</li>
                    <li>Cookies and Tracking Technologies: We use cookies to collect information about your browsing behavior to improve user experience and provide personalized services.</li>
                </ul>
            </p>
            <h2 id='payment' className='text-2xl font-semibold scroll-mt-40'>Payment Services</h2>
            <p className='text-black list-disc ml-5'>
                In-app purchases via credit/debit cards, UPI, or mobile wallets, as well as Cash on Delivery (COD), which is paid for after the service is rendered, are among the several payment methods that Styler offers. You will receive a confirmation once your online payment is finalized, and full payment is expected upfront unless you opt for COD. The final price will include additional charges for urgent or special requests. All prices include GST, and any additional charges will be clearly stated before payment.
            </p>
            <h2 id='cancel' className='text-2xl font-semibold scroll-mt-40'>Cancellation And Rescheduling</h2>
            <ul className='text-black list-disc ml-5'>
                <li>Cancellation Policy: Appointments can be canceled without penalty up to 24 hours in advance; thereafter, a fee of INR 700 will apply.</li>
                <li>Rescheduling Policy: You can reschedule for free up to 12 hours before your appointment, but multiple requests may result in additional fees depending on availability.</li>
                <li>No-show Policy: If you are unavailable at the appointed time and have not rescheduled, you will be charged INR 500.</li>
            </ul>
            <h2 id='refund' className='text-2xl font-semibold scroll-mt-40'>Return And Refund Policy</h2>
            <ul className='text-black list-disc ml-5'>
                <li>Custom clothing is not returnable. Reimbursement may be issued for major design differences, defects, or improper fit.</li>
                <li>Refunds must be requested within 7 days after delivery and will be granted in 10-15 working days to the corresponding payment method or as application credit.</li>
                <li>Minor adjustments are free for 15 days. Larger problems may necessitate a new fitting session.</li>
                <li>Pico embroidery and minor adjustments, which are non-refundable once finished.</li>
            </ul>
            <h2 id='responsibility' className='text-2xl font-semibold scroll-mt-40'>User Responsibilities</h2>
            <p className='text-black'>Customers must be available for the tailor's visit, provide accurate design details, and inspect the garment within 7 days to report any flaws. Styler cannot be held accountable for any delays or issues caused by the customer's incorrect data.</p>
            <h2 id='service' className='text-2xl font-semibold scroll-mt-40'>Service Limitations</h2>
            <p className='text-black'>Styler endeavors to offer high-quality, timely service. However, we do not guarantee the availability of specific tailors at all times. Tailoring quality depends on the accuracy of the measurements provided during the initial fitting session. Styler is not responsible for delays caused by external factors such as fabric sourcing, customer indecisiveness, or miscommunications regarding design preferences.</p>
            <h2 id='dispute' className='text-2xl font-semibold scroll-mt-40'>Liability And Dispute Reputation</h2>
            <p className='text-black'>Styler's liability in disputes is limited to the amount paid for services rendered. Customers should initially contact customer service with their grievances. Unresolved matters would be handled in Delhi courts under Indian law. If the problem is not handled satisfactorily, you may contact Styler management at</p>
            <h2 id='contact' className='text-2xl font-semibold scroll-mt-40'>Contact Our Team</h2>
            <p className='text-black'>If any problem is not handled satisfactorily, you may contact Styler management at the client query by mailing us at <span className='text-[#081d6e] font-bold underline'>info@firststoreapp.in</span></p>
        </main>
    </div>
  )
}

export default TermsOfUse