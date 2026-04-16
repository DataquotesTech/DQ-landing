import Navbar from "@/components/landing/Navbar";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";

export default function TermsOfUsePage() {
    return (
        <>
            <Navbar />
            <div className="container py-16">
                <div className="px-4 py-16">
                    <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">Overview</h2>
                    <p className="mb-4">
                        These Terms & Conditions act as a master umbrella legal framework for all divisions of DataQuotes Edutech Pvt. Ltd., covering education and training programs, digital marketing services, IT consulting and development services, school collaboration programs, and workshops and certification programs.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">1. Edutech Platform Services</h2>
                    <p className="mb-4">
                        Our Edutech platform provides technology training programs, data analytics and digital skills courses, internship-oriented training, certification programs, and career mentorship programs through online, hybrid, or classroom-based delivery.
                    </p>
                    <p className="mb-4"><strong>Student Eligibility:</strong> Students must be at least 18 years old or provide parent/guardian consent if under 18.</p>
                    <p className="mb-4"><strong>Certification:</strong> Certificates are issued only upon completion of training modules, meeting attendance requirements, and submitting required assignments.</p>
                    <p className="mb-4"><strong>Internship & Placement Disclaimer:</strong> Job placement is not guaranteed. Employment outcomes depend on student performance, employer requirements, and market conditions.</p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">2. Digital Marketing Services</h2>
                    <p className="mb-4">
                        Services include social media marketing, lead generation, paid advertising, SEO optimization, and digital strategy consulting. Performance may vary due to market competition and algorithm changes. We do not guarantee specific sales, leads, or revenue outcomes unless explicitly defined in a contract.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3. IT Services</h2>
                    <p className="mb-4">
                        IT services include website development, software solutions, IT consulting, system integration, and digital infrastructure services. Project timelines depend on client requirements and technical complexity. Changes outside the agreed scope may result in revised timelines and additional charges.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">4. DataQuotes Juniors (K-12)</h2>
                    <p className="mb-4">
                        Programs for ages 6-15 include technology awareness, AI and cybersecurity basics, logical thinking programs, and Python workshops. All programs require parental or guardian consent. Certificates acknowledge participation only and do not represent professional qualifications.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">5. General Terms</h2>
                    <p className="mb-4">
                        <strong>Payments:</strong> All fees must be paid through authorized channels. Fees are generally non-refundable once programs begin unless otherwise stated.<br/>
                        <strong>Intellectual Property:</strong> All course materials, training content, recorded sessions, and marketing strategies remain the property of DataQuotes Edutech Pvt. Ltd. Unauthorized reproduction or sharing is prohibited.<br/>
                        <strong>Conduct:</strong> Users agree to maintain respectful behavior and use services lawfully. Disruptive behavior may result in suspension or removal from programs.<br/>
                        <strong>Liability:</strong> DataQuotes is not responsible for career decisions, employment outcomes, technical interruptions, third-party failures, or data loss caused by client-side systems.<br/>
                        <strong>Governing Law:</strong> These terms are governed by the laws of India, with jurisdiction in Andhra Pradesh.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
                    <p className="mb-2">DataQuotes Edutech Pvt. Ltd.</p>
                    <p className="mb-2">Email: <a href="mailto:hello@dataquotes.net" className="text-primary hover:underline">hello@dataquotes.net</a></p>
                </div>
            </div>
            <ContactForm />
            <Footer />
            <WhatsAppFloat />
        </>
    );
}