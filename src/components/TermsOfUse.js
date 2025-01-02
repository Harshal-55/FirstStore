import React from "react";
import Navbar from "./Navbar";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header>
        {/* Navbar */}
        <Navbar />
      </header>

    
    <div className="flex flex-col md:flex-row bg-gray-50 p-6 md:p-12">
      {/* Sidebar Navigation */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0 mr-1 md:mr-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <ul className="space-y-4">
            <li className="bg-[#071C6D] text-white p-3 rounded-lg font-semibold cursor-pointer">
              Booking Services
            </li>
            <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-blue-100">
              Payment Services
            </li>
            <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-blue-100">
              Cancellation and Rescheduling
            </li>
            <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-blue-100">
              Return and Refund Policy
            </li>
            <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-blue-100">
              User Responsibilites
            </li>
            <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-blue-100">
              Service Limitations
            </li>
            <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-blue-100">
              Liability and Dispute Reputation
            </li>
            <li className="p-3 rounded-lg bg-gray-100 cursor-pointer hover:bg-blue-100">
              Contact Our Team
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#071C6D] mb-4 lg:mb-12">Terms and Conditions</h1>
        <hr className="border-gray-300 mb-4" />
        

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">FirstStore</h2>
            <p className="list-disc list-inside text-gray-700">
                FirstStore is your ultimate destination for personalized e-commerce solutions. We offer custom store setups, product listings, and order management services tailored to your business needs. Our platform allows you to get personalized store designs, seamless integrations, and full-scale e-commerce support. By using FirstStore, you agree to our Terms & Conditions, which govern your use of our website and services. Please review them carefully before proceeding.
            </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">Booking Services</h2>
          <p className="text-gray-700">
          We may collect the following types of information:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Personal Information: Name, email address, shipping address, phone number, and payment details when you create an account, place an order, or contact us.</li>
            <li>Usage Data: Information about how you interact with our platform, including pages visited, links clicked, and actions taken within the app or website.</li>
            <li>Cookies and Tracking Technologies: We use cookies to collect information about your browsing behavior to improve user experience and provide personalized services.</li>
            </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">Payment Services</h2>
          <p className="list-disc list-inside text-gray-700">
          In-app purchases via credit/debit cards, UPI, or mobile wallets, as well as Cash on Delivery (COD), which is paid for after the service is rendered, are among the several payment methods that Styler offers. You will receive a confirmation once your online payment is finalized, and full payment is expected upfront unless you opt for COD. The final price will include additional charges for urgent or special requests. All prices include GST, and any additional charges will be clearly stated before payment.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">Cancellation And Rescheduling</h2>
          <ul className="text-gray-700">
          <li>Cancellation Policy: Appointments can be canceled without penalty up to 24 hours in advance; thereafter, a fee of INR 700 will apply.</li>
          <li>Rescheduling Policy: You can reschedule for free up to 12 hours before your appointment, but multiple requests may result in additional fees depending on availability.</li>
          <li>No-show Policy: If you are unavailable at the appointed time and have not rescheduled, you will be charged INR 500.</li>
            </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">Return And Refund Policy</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Custom clothing is not returnable. Reimbursement may be issued for major design differences, defects, or improper fit.</li>
            <li>Refunds must be requested within 7 days after delivery and will be granted in 10-15 working days to the corresponding payment method or as application credit.</li>
            <li>Minor adjustments are free for 15 days. Larger problems may necessitate a new fitting session.</li>
            <li>Pico embroidery and minor adjustments, which are non-refundable once finished.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">User Responsibilites</h2>
          <p className="list-disc list-inside text-gray-700">
          Customers must be available for the tailor's visit, provide accurate design details, and inspect the garment within 7 days to report any flaws. Styler cannot be held accountable for any delays or issues caused by the customer's incorrect data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">Service Limitations</h2>
          <p className="list-disc list-inside text-gray-700">
          Styler endeavors to offer high-quality, timely service. However, we do not guarantee the availability of specific tailors at all times. Tailoring quality depends on the accuracy of the measurements provided during the initial fitting session. Styler is not responsible for delays caused by external factors such as fabric sourcing, customer indecisiveness, or miscommunications regarding design preferences.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">Liability And Dispute Reputation</h2>
          <p className="list-disc list-inside text-gray-700">
          Styler's liability in disputes is limited to the amount paid for services rendered. Customers should initially contact customer service with their grievances. Unresolved matters would be handled in Delhi courts under Indian law. If the problem is not handled satisfactorily, you may contact Styler management at
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">Contact Our Team</h2>
          <p className="list-disc list-inside text-gray-700">
          If any problem is not handled satisfactorily, you may contact Styler management at the client query by mailing us at info@firststoreapp.in
          </p>
        </section>

      </div>
    </div>
    </div>
  );
};

export default TermsOfUse;
