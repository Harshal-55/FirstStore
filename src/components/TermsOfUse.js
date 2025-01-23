import React from "react";
import Navbar from "./Navbar";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header>
        {/* Navbar */}
        <Navbar />
      </header>

    
    <div className="flex flex-col md:flex-row bg-gray-50 p-5 md:p-12">
      {/* Sidebar Navigation */}
      {/*}
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
      </div> */}

      {/* Main Content */}
      <div className="w-full space-y-6 mx-1 lg:mx-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#071C6D] mb-4 lg:mb-12">Terms and Conditions</h1>
        <hr className="border-gray-300 mb-4" />
        

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">1. Acceptance of Terms</h2>
            <p className="list-disc list-inside text-gray-700">
            By accessing and using the FirstStore platform, you agree to comply with these Terms and Conditions. If you do
            not agree, you may not use the platform.
            </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">2. Platform Usage</h2>
          <p className="text-gray-700">
          FirstStore provides tools to help retail owners build, manage, and operate their digital stores.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Users are responsible for ensuring the accuracy of the information, inventory, and other data uploaded to the platform</li>
              <li> Customers using the platform to browse or order products are required to comply with the rules and
              policies of the specific store they interact with.</li>
            </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">3. User Responsibilities</h2>
         
          <ul className="list-disc list-inside text-gray-700">
            <li> Retail Owners: Must maintain updated and accurate inventory details, product descriptions, pricing, and availability. Misleading information or unprofessional conduct may result in account suspension.

            </li>
            <li>
            Customers: Are expected to use the platform responsibly and respect the policies of the stores they interact with.</li></ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">4. Prohibited Activities</h2>
          <p className="text-gray-700">
            Users are prohibited from engaging in the following:
            </p> 
          <ul className="list-disc list-inside text-gray-700">
          <li>Uploading false, illegal, or harmful content.</li>
          <li>Using the platform for fraudulent or unlawful purposes.</li>
          <li>Sharing login credentials or compromising the security of the platform.</li>
            </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">5. Intellectual Property</h2>
          <p className="text-gray-700">
            All platform features, designs, trademarks, and content are the intellectual property of FirstStore. Users are granted limited rights to use these resources solely for the intended purposes of the platform.
          </p>
        
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">6. Liability Disclaimer</h2>
          <p className="text-gray-700">
            FirstStore provides tools and services on an "as-is" basis:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li> We are not responsible for the accuracy or completeness of information provided by retail owners.</li>
            <li>Any issues related to orders, including delays, returns, or disputes, must be resolved directly between the
            customer and the store.</li>
           </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">7. Privacy and Data Protection</h2>
          
          <ul className="list-disc list-inside text-gray-700">
            <li> FirstStore collects and processes data in compliance with applicable data protection laws.</li>
            <li>Users' personal and business information will not be shared with third parties without consent, except as
            required by law.</li>
           </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">8. Modifications to the Platform</h2>
          <p className="list-disc list-inside text-gray-700">
          FirstStore reserves the right to modify or discontinue any aspect of the platform, with or without notice.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">9. Termination</h2>
          <p className="list-disc list-inside text-gray-700">
          FirstStore may terminate or suspend access to the platform for users violating these Terms and Conditions, or for any other reason at our discretion.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">10. Changes to Terms</h2>
          <p className="list-disc list-inside text-gray-700">
          FirstStore reserves the right to update these Terms and Conditions at any time. Continued use of the platform
after changes are made constitutes acceptance of the revised terms.
</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#071C6D] mb-4">Contact Information</h2>
          <p className="list-disc list-inside text-gray-700">
          For any questions or concerns, please contact us at care@firststore.io
          </p>
        </section>

      </div>
    </div>
    </div>
  );
};

export default TermsOfUse;
