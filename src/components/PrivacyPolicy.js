import React from 'react'
import Navbar from './Navbar';
import IndexSidebar from './IndexSidebar';

const PrivacyPolicy = () => {
  const sections = [
    { id: "information", label: "Information We Glean" },
    { id: "practices", label: "Our Data Utilization Practices" },
    { id: "protection", label: "Data Protection" },
    { id: "rights", label: "Your Legal Rights" },
    { id: "security", label: "Security" },
    { id: "policy", label: "Cookies Policy" },
  ];
  return (
    <div>
      <Navbar />
      <IndexSidebar 
      sections={sections}
      activeClassName="bg-blue"
      className="mt-24 ml-12"
      />
      <main className='text-[#081d6e] absolute top-24 flex flex-col gap-4 ml-96 left-12 w-[60%]'>
        
        <h1 className="text-3xl font-bold font-noto">
          Privacy Policy
        </h1>
        <p className='text-black'>Styler has prioritized protecting your privacy. Our privacy policy outlines how we collest, use, and disclose information fo our online presence [Styler Website URL]. Your use of our website indicates your agreement to the rules outlined here.</p>

        <h2 className="text-2xl scroll-mt-40 capitalize font-semibold" id="information">
          Information we Glean
        </h2>
        <ul className='list-disc pl-5 text-black'>
            <li>Styler accumulates private necessary data to provide you with a fully integrated service experience, which includes</li>
            <li>For booking and communication, provide contact information, including name, prione nurstbet, email, and postal address,</li>
            <li>
            Location data can help talkurs arrive on time for in-person appointments.
            </li>
            <li>
            Payment infummation: Credit card and Pi information will the collected for transaction procnesing.
            </li>
            <li>
            Tailor-specific data, such as metrics, fitting priorities, and design choices, ant preserend to ensure customized service.
            Your info is used primarily for reservations and consultaberns with stylish, handling fees and creating inwsices, emsiring that custom clothes are delivered accurately as per your choioms, and enhancing our forum haemt ons views and
            data procesising. This approach ensures a unified platform while honoring your confidentiality and choices in our businesses
            </li>
          </ul>
          <h2 className='text-2xl scroll-mt-40 font-semibold' id="practices">
            Our Data Utilization Practices
          </h2>
          <p className='text-black'>
          Your data is utilized excessively for making bookings and appointments with tailors, handling payments and creating Invoices, ensuring this custom garments are delivered accurately according to your preferences, anit enhancing our platform hased on uses feedback and data analytics. This approach guarantees a smooth mxperience while prioritizing your privary and prefurunce in our services.
          </p>
          <h2 className="text-2xl scroll-mt-40 font-semibold" id="protection">
            Data Protection
          </h2>
          <p className='text-black'>
          To safeguard your personally identifiable information, we use cryptography and security protocols that are industry standard. You are also in charge of protecting your account credentials, even though we take every preventive action to protect your data.
          </p>
          <h2 className='text-2xl scroll-mt-40 font-semibold' id="rights">
          Your Legal Rights
          </h2>
          <p className='text-black'>You have the right to:
            <ul className="list-disc pl-5">
              <li>
              You can obtain, alter, and remove your personal information from our directory at any time.
              </li>
              <li>
              Suspend permission for data usage may impact service delivery.
              </li>
              <li>
              Request information regarding third-party companies with whom your data has been shared.
              </li>
            </ul>
            If you wish to assert these rights, kindly inform us at <span className='font-semibold underline'>care@firststorerapp.in</span>.
          </p>
          <h2 className='text-2xl scroll-mt-40 font-semibold' id="security">
          Security
          </h2>
          <ul className='list-disc pl-5 text-black'>
            <li>We hold necessary precautions to protect information from malicious use, full transparency, deformation, and deletion of data.</li>
            <li>
            However, neither Online transfer nor portable hard drives are secure.
            </li>
          </ul>
          <h2 className="text-2xl scroll-mt-40 font-semibold" id="policy">
            Cookies Policy
          </h2>
          <p className='text-black'>
          Cookies are used by Styler to improve your experience in two ways:
            <ul className="list-disc pl-5">
              <li>
              By analyzing user activity to improve the performance of the website and by highly personalized content according to user preferences.
              </li>
              <li>
              In your browser's settings, you can turn off cookies, but doing so might make some platform features less functional.
              </li>
            </ul>
          </p>
      </main>
    </div>
  )
}

export default PrivacyPolicy