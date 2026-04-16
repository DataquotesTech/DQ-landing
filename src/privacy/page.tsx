import Navbar from "@/components/landing/Navbar";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";


export default function PrivacyPolicyPage() {
    return (
        <>
            <Navbar />
            <div className="container py-16">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                <p className="mb-4">
                    <strong>Platform:</strong> DataQuotes EdTech<br />
                    <strong>Effective Date:</strong> 16<sup>th</sup> April 2026
                </p>
                <p className="mb-4">
                    This Privacy Policy describes how DataQuotes Edutech Pvt. Ltd. ("DataQuotes", "Company", "we", "our", or "us") collects, uses, processes, and protects personal information of users who access our EdTech platform, training programs, and related services.
                </p>
                <p className="mb-6">
                    By accessing our website or enrolling in any course or program, you agree to the practices described in this Privacy Policy.
                </p>

                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                <p className="mb-4">When users register or enroll in our programs, we may collect: full name, email address, phone number, educational qualification, city or location, resume or career details, and payment information (through secure payment providers).</p>

                <h3 className="text-xl font-semibold mb-2">Account and Platform Usage Data</h3>
                <p className="mb-4">We may automatically collect IP address, browser type and device information, pages visited, session activity and learning progress, and login timestamps. This information helps improve user experience and platform performance.</p>

                <h3 className="text-xl font-semibold mb-2">Communication Data</h3>
                <p className="mb-6">If users contact us through website forms, email, phone calls, WhatsApp or messaging platforms, we may store communication records for support and service improvement.</p>

                <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="mb-6">Information collected may be used for processing course registrations, delivering training programs, providing student support and communication, issuing certifications, improving course content and platform experience, sending important notifications regarding programs, and informing users about relevant courses, workshops, or events. We may also use aggregated data for analytics and business insights.</p>

                <h2 className="text-2xl font-semibold mb-4">3. Sharing of Information</h2>
                <p className="mb-4">DataQuotes does not sell personal information to third parties. However, information may be shared with service providers assisting with payment processing, website hosting, email communication tools, and learning management systems. With student consent, basic information such as name, resume, and skills profile may be shared with internship or hiring partners for career opportunities. We may also disclose information when required to comply with legal obligations, respond to lawful requests from authorities, or protect rights, safety, or property.</p>

                <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                <p className="mb-6">We implement reasonable administrative, technical, and physical safeguards to protect personal information, including secure servers, access control, and encrypted payment processing. However, no digital system can guarantee absolute security.</p>

                <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
                <p className="mb-6">Personal information will be retained only for as long as necessary to deliver training services, maintain student records, and comply with legal and regulatory obligations. Users may request deletion of personal data subject to applicable legal requirements.</p>

                <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="mb-6">Our website may use cookies and similar tracking technologies to improve website performance, analyze visitor behavior, and personalize user experience. Users may modify browser settings to disable cookies if preferred.</p>

                <h2 className="text-2xl font-semibold mb-4">7. User Rights</h2>
                <p className="mb-6">Users may have the right to request access to their personal data, request correction of inaccurate information, request deletion of personal information, and withdraw consent for certain communications. Requests can be submitted through our official contact channels.</p>

                <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
                <p className="mb-6">Our website may contain links to third-party platforms. DataQuotes is not responsible for privacy practices of those external websites. Users should review the privacy policies of those websites independently.</p>

                <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
                <p className="mb-6">Some training programs may involve students under the age of 18. In such cases, enrollment requires parental or guardian consent. Personal data collected from minors will be used only for educational program delivery. We take reasonable measures to protect children's information.</p>

                <h2 className="text-2xl font-semibold mb-4">10. Policy Updates</h2>
                <p className="mb-6">We may update this Privacy Policy periodically to reflect changes in legal requirements, platform functionality, and business operations. Updated policies will be posted on this page with the revised effective date.</p>

                <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
                <p className="mb-4">For privacy-related questions or data requests, please contact:</p>
                <p className="mb-2">DataQuotes Edutech Pvt. Ltd.</p>
                <p className="mb-2">Email: <a href="mailto:hello@dataquotes.net" className="text-primary hover:underline">hello@dataquotes.net</a></p>
                <p>Website: <a href="https://www.dataquotes.net" className="text-primary hover:underline">www.dataquotes.net</a></p>
            </div>
            <ContactForm />
            <Footer />
            <WhatsAppFloat />
        </>
    );
}