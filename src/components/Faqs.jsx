import React from "react";
import "../styles/Faqs.css";
const FAQ = () => {
  const faqData = [
    {
      question: "Demographics Entry",
      answer:
        "We follow the guidelines and billing software to minimize your workload right from data entry to smoother functioning of your operations. We are here to provide a complete solution by integrating advanced technology with highly qualified and knowledgeable billing professionals. With our experienced billing professionals, the chances of errors are very low or negligible sometimes. We put effort into making the claim settlement process faster and more cost-effective.<br/><br/><ul><li>Patients Registration and updating records timely.</li><li>Compared to your existing costs, increase savings up to 40% with us.</li><li>Following HIPAA Compliant process and providing remote access solution to keep control over the data.</li><li>Within 30 days or less, get a quick and uninterrupted transition to YosaTechnology's operations centers.</li></ul>",
    },
    {
      question: "Eligibility and Benefit Verification",
      answer:
        "In general, we check whether the patient policy is still active or not on the given treatment date and also check whether the service provided by the doctor comes under that policy. So for the purpose of reviewing eligibility and benefits, the provider or any of his staff is supposed to verify the patient policy by calling or checking on the insurer’s website. For California Workers’ Compensation, We ensure your claim reaches the right party and gets paid timely as we verify in detail the injured worker’s claim information, accepted body parts, and payer information before sending your claims to the party.<br/><br/>Our work is to take care of all your insurance verification needs and can provide you with details regarding patients, also reducing the number of denials and achieving more fabulous collections at the first attempt.",
    },
    {
      question: "Request for Authorization (Pre-Certification)",
      answer:
        "In medical terms, it is essential to know in depth about the decision by your healthcare insurer or plan regarding a healthcare service, treatment plan, prescription drug, or durable medical equipment. We also call it prior authorization, prior approval, or pre-certification. To know and decide whether the medical treatment or services requested are necessary, forward a request for authorization in the prescribed form or format by your insurer, including essential information for the Utilization Review Department.<br/><br/>As a part of RCM Solutions Package, YosaTechnology Solutions presents this much-needed insurance authorization service.<br/><br/>Submit Authorization Requests for all Insurance Carriers<br/>Assigned On-Demand Specialist<br/>Get Quality Insurance Authority Service<br/>Take good care of Request for authorization requests applicable to California Workers’ Compensation.",
    },
    {
      question: "Charge Entry & Claims Processing / Submission",
      answer:
        "Are you worried about delayed claim processing?<br/><br/>Now all you need to do is connect with our highly expertized team of billing professionals and get the claims sent to payers faster, with more accuracy, and reduced costs. We have qualified and knowledgeable billing professionals who work on highly advanced technology to provide you with an impeccable solution that minimizes data-entry work using guidelines and billing software.<br/><br/>Experienced billing professionals charge for Multi-specialty entry.<br/>To have fewer denials and underpayments, clean all claims before submission.<br/>Necessary claim attachments or Paper Billing Submission.",
    },
    {
      question: "Account Receivable Resolution",
      answer:
        "Once we submit claims to insurance companies electronically or by paper mail, we continuously keep tracking to ensure provider claims reach the payer timely and they get paid. We keep a check by calling insurance companies and looking over their website activity.<br/><br/>We have simplified the process for our clients and classified Account Receivable resolution into 3 phases:<br/><br/>Phase I – Initial evaluation of medical Account Receivable Follow-up<br/><br/>We begin the follow-up process after running the aging report within 15-20 days of electronic claim submission. Our focus is on ensuring that each claim has reached the correct payer. We take care that for any additional information or some other reason, no claim gets refused by the insurance company, and ordinarily, private companies process the claim within the same time frame.<br/><br/>If there is any denial by the insurance company due to any inaccurate reason, we need 15 days to document the same for follow-up, but we mostly try to resolve it on call.<br/><br/>Phase II – Analysis and prioritizing medical Account Receivable Follow-up<br/><br/>Our experienced medical A/R analysts begin this phase by discovering various issues for uncollectible claims (marked as bad or invalid) or claims where the contracted rate is not paid to the carrier.<br/><br/>Our team ensures that “clean claims” will be reimbursed according to the contracted fee schedule. We check the filing/appeal limits of the major carriers. We ensure that claims must stick to the correct processing unit by checking the claims submission address.<br/><br/>Phase III – Collecting the maximum of medical Account Receivable Follow-up<br/><br/>Once verification of all the essential billing information (Claims processing address and other medical billing rules) is found accurate, only then re-filing is possible. For this, our team will analyze claims that are supposed to be within the filing limit of the carrier.<br/><br/>Additionally, supporting documents are required for claims exceeding the filing limit of the carrier and claims that turn up to be underpaid by the carrier. Appeal procedures differ considerably depending on the plan, carrier, and state. Pile up these procedures and implement them on claims that are being appealed.<br/><br/>Wherever possible, we will pass the claims electronically to the carrier or through a clearinghouse for other carriers. We will forward the claims and follow up for confirmation.<br/><br/>Accomplishment to medical Account Receivable recovery<br/><br/>The significant achievement of the Cash Acceleration Program depends on several factors:<br/>Undoubtedly, the completeness and accuracy of the account data provided are of prime importance. In order to perform extensive collection efforts, YosaTechnology Solutions provides the protocols, expertise, and other necessary resources. We have received full support and high-level cooperation from the provider’s office for our successful programs.",
    },
    {
      question: "Payment Posting, Secondary & Patient Billing",
      answer:
        "We have designed a Cash Post Solution for our clients, and can you believe we generally need one business day to get all our client payments posted accurately in the billing system. It sounds excellent that our primary focus is on providing cost-effective solutions.<br/><br/>Post payments from EOBs by billing professionals, charge slips, and other documentation<br/>Supporting payer billing<br/>Easy management and posting of denials<br/>Timely processing write-offs and other adjustments<br/>Detailed verification of all payments posted<br/>Reduced chances of errors and eased the reconciliation process<br/>In comparison to your existing costs, save up to 40% with us<br/>Consistent processing",
    },
  ];

  return (
    <section className="head-faq" id="faq">
      <div className="faq-container">
        <div className="faq-container-data">
          {faqData.map((item, index) => (
            <details
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              key={index}
              className="faq-detail-box"
            >
              <summary className="question bg-blue-gradient text-black">
                {item.question}
              </summary>
              <div className=" answer text-white">
                <p dangerouslySetInnerHTML={{ __html: item.answer }} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
