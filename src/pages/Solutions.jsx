import React from "react";
import Faqs from "../components/Faqs";
// import solution from "../assets/solutions.png";
import "../styles/Solutions.css";
const Solutions = () => {
  return (
    <div className="faq-main text-white bg-black">
      {/* <div className="sol-image">
        <img src={solution} alt="solution" />
      </div> */}
      <div className="faq-container">
        <Faqs />
      </div>
      <div className="faq-bottom">
        <h1
          className="font-semibold text-[24px] text-gradient pt-2 pb-3"
          data-aos="flip-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Our Revenue Cycle Management Services
        </h1>
        <p
          className="mb-5"
          data-aos="flip-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Revenue cycle management has a significant impact on the way your
          hospital or medical practice functions. The rising cost of healthcare
          combined with strict regulations which keep changing regularly has
          made daily operations a chore for healthcare operators. A modern
          healthcare provider needs policies and practices in place to remain
          financially secure. With our customized revenue cycle solutions, you
          can see a visible impact on your day-to-day operations while
          benefiting from enhanced customer satisfaction and improved claims
          submission and returns.
          <br />
          <br />
          Whether you are a healthcare provider or an individual physician, we
          can provide services that will meet your exact needs. Our wide range
          of healthcare revenue cycle management services include –
        </p>
        <li>
          <h1
            className="font-semibold text-[26px] text-gradient pt-2 pb-3"
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Payment Posting Services
          </h1>
          <p
            className="mb-5"
            data-aos="zoom"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            We can ensure quick and accurate posting of all payments into your
            billing system. We also do regular auditing of all posted payments,
            which helps to reduce errors.
            <br />
            Read our article which highlights the 5 key advantages of payment
            posting in medical billing.
          </p>
        </li>
        <li>
          <h1
            className="font-semibold text-[26px] text-gradient pt-2 pb-3"
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Denial Management Services
          </h1>
          <p
            className="mb-5"
            data-aos="zoom"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Insurance claim denials are a major pain point for healthcare
            businesses around the world. We can help you analyze, correct, and
            re-submit denied claims. This process includes identifying denials
            by revenue coding and CPT/HCPCS codes. Once this is done, the reason
            for the denials is analyzed and a detailed denial management report
            is prepared. In this way, you can effectively manage claim denials.
            <br />
            Read our article which provides 7 tips to improve denial management
            of healthcare claims.
          </p>
        </li>
        <li>
          <h1
            className="font-semibold text-[26px] text-gradient pt-2 pb-3"
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Accounts Receivable Follow-up
          </h1>
          <p
            className="mb-5"
            data-aos="zoom"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            We take care of all discrepancies that result in delayed or denied
            receivables. Our AR professionals will identify discrepancies and
            follow-up with the shortcomings to ensure that healthcare providers
            are paid on time. Our team will follow-up on pending claims,
            initiate collections and track down overdue payments to maximize the
            cash flow.
          </p>
        </li>
        <li>
          <h1
            className="font-semibold text-[26px] text-gradient pt-2 pb-3"
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            AR Calling Services
          </h1>
          <p
            className="mb-5"
            data-aos="zoom"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            We will identify the unpaid dues that are causing a bottleneck in
            your revenue cycle management system and follow-up with delinquent
            patient accounts. We will courteously engage patients and urge them
            to make timely payment of pending dues. We will also call the
            insurance companies to send details about rejected claims.
          </p>
        </li>
        <li>
          <h1
            className="font-semibold text-[26px] text-gradient pt-2 pb-3"
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Insurance Eligibility Verification
          </h1>
          <p
            className="mb-5"
            data-aos="zoom"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Checking eligibility of the patients can be time-consuming because
            it is a resource-intensive task. This is completely taken care of by
            our trained professionals who will check all medical documents,
            verify the patient coverage, follow-up with patients if there is a
            shortfall in the supporting documents. The final report will be
            filed for faster processing.
          </p>
        </li>
        <li>
          <h1
            className="font-semibold text-[26px] text-gradient pt-2 pb-3"
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Medical Claims Processing Services
          </h1>
          <p
            className="mb-5"
            data-aos="zoom"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            We can manage both electronic claims submissions as well as
            submission of paper claims. Our experienced team prepares the
            Explanation of Benefits (EOBs) and submits the claims to the
            insurance company.
          </p>
        </li>
        <li>
          <h1
            className="font-semibold text-[26px] text-gradient pt-2 pb-3"
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Accounts Receivables Services
          </h1>
          <p
            className="mb-5"
            data-aos="zoom"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            We can help you identify patient accounts that require follow-ups
            and take the requisite action to collect unpaid/underpaid claims.
            Our services include –
            <ul
              className="ul-list"
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <li className="ml-4">
                <p className="mb-2">Accounts receivable analysis</p>
              </li>
              <li className="ml-4">
                <p className="mb-2">
                  Identification of the grounds for claims denials
                </p>
              </li>
              <li className="ml-4">
                <p className="mb-2">Follow-ups on pending claims</p>
              </li>
            </ul>
          </p>
          <p className="mb-5">
            We can also prepare monthly reports that can help you manage your
            cash flow and increase profitability. These include reports related
            to –
          </p>
          <ul
            className="ul-list"
            data-aos="zoom"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <li className="ml-4">
              <p className="mb-5">Aging A/R</p>
            </li>
            <li className="ml-4">
              <p className="mb-5">Charges, payments, and adjustments</p>
            </li>
            <li className="ml-4">
              <p className="mb-5">Payment punctuality for different Payers</p>
            </li>
            <li className="ml-4">
              <p className="mb-5">Payer mix</p>
            </li>
          </ul>
          <p
            className="mb-5"
            data-aos="zoom"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            In this way, we provide a range of hospital revenue cycle management
            services that can help you work better.
          </p>
        </li>
        <li>
          <h1
            className="font-semibold text-[26px] text-gradient pt-2 pb-3"
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Medicare Reimbursement Services
          </h1>
          <p
            className="mb-5"
            data-aos="zoom"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            We help you successfully optimize compliant Medicare reports, which
            is challenging, especially when the federal and state regulations
            are continually changing. We have expertise in comprehending
            multi-layered legislation and applying it to ensure the most optimum
            Medicare reimbursement on an ongoing basis.
          </p>
        </li>
        <li>
          <h1
            className="font-semibold text-[26px] text-gradient pt-2 pb-3"
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Medical Claims and Encounter Processing Services
          </h1>
          <p
            className="mb-5"
            data-aos="zoom"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            We assist clients in submitting encounter data to the respective
            agencies. Our encounter processing services are HIPAA compliant and
            manage end-to-end testing and certification logistics. We receive,
            transform, and transmit full and compliant encounters.
          </p>
        </li>
        <li>
          <h1
            className="font-semibold text-[26px] text-gradient pt-2 pb-3"
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Revenue Improvement Services
          </h1>
          <p
            className="mb-5"
            data-aos="zoom"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            If you think your revenue stream is affected by manual or
            traditional management of back-end functions, we’ll take away your
            concerns by offering high-quality revenue improvement services.
          </p>
        </li>
        <li>
          <h1
            className="font-semibold text-[26px] text-gradient pt-2 pb-3"
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Patient Registration
          </h1>
          <p
            className="mb-5"
            data-aos="zoom"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            We can help you process your patients’ personal, demographic, and
            all insurance-related information. At each step of the process, we
            ensure that we verify and validate patient information. During this
            step, easy identification of insurance mismatch, wrong provider
            details, etc. can help you avoid losses down the line.
          </p>
        </li>
        <li>
          <h1
            className="font-semibold text-[26px] text-gradient pt-2 pb-3"
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Medical Coding
          </h1>
          <p
            className="mb-5"
            data-aos="zoom"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Strict regulations and increasing instances of self-pay have led to
            increased risk in medical coding. Our accurate medical coding
            services can help you create and streamline patient records within a
            short period of time, while accelerating physician payments. Our
            team is comprised of Certified Professional Coders (CPCs) accredited
            by the American Academy of Professional Coders (AAPC). They work in
            accordance with the updated standards and methodologies laid down by
            CMS, Medicare contractors, AMA, medical societies, and federal
            organizations.
          </p>
        </li>
        <li>
          <h1
            className="font-semibold text-[26px] text-gradient pt-2 pb-3"
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Charge Capture
          </h1>
          <p
            className="mb-5"
            data-aos="zoom"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Charge capture is extremely important since it helps doctors
            accurately record the entire information of services provided. This
            information is then sent to different payers and insurance companies
            for quick and timely reimbursement. We can process charges for
            multiple specialties within a short turnaround time. We have
            extensive experience in handling –
          </p>
          <ul className="ul-list">
            <li className="ml-4">
              <p className="mb-5">Medicare</p>
            </li>
            <li className="ml-4">
              <p className="mb-5">Third Party Liability</p>
            </li>
            <li className="ml-4">
              <p className="mb-5">Medicaid</p>
            </li>
            <li className="ml-4">
              <p className="mb-5">Managed Care</p>
            </li>
            <li className="ml-4">
              <p className="mb-5">Preferred Provider Organizations</p>
            </li>
            <li className="ml-4">
              <p className="mb-5">Indemnity Insurers</p>
            </li>
            <li className="ml-4">
              <p className="mb-5">Workers Compensation</p>
            </li>
          </ul>
        </li>
        <li>
          <h1
            className="font-semibold text-[26px] text-gradient pt-2 pb-3"
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Custom Reporting
          </h1>
          <p
            className="mb-5"
            data-aos="zoom"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            Our services are ideal for healthcare providers who want a 3600
            outlook of their RCM system, and how it’s affecting their bottom
            line. We create custom reports through powerful dashboards which you
            can access from any location and device. Our services consist of –
          </p>
          <ul
            className="ul-list"
            data-aos="zoom"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <li
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className="ml-4"
            >
              <p className="mb-5">Charge and Payment reports</p>
            </li>
            <li
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className="ml-4"
            >
              <p className="mb-5">Procedure frequency and diagnosis reports</p>
            </li>
            <li
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className="ml-4"
            >
              <p className="mb-5">Payment reimbursement reports</p>
            </li>
            <li
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className="ml-4"
            >
              <p className="mb-5">Lockbox reconciliation reports</p>
            </li>
            <li
              data-aos="zoom"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className="ml-4"
            >
              <p className="mb-5">Payor analysis reports</p>
            </li>
          </ul>
        </li>
      </div>
    </div>
  );
};

export default Solutions;
