import LegalLayout from '../components/Legal/LegalLayout';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main>
                <LegalLayout title="Privacy Policy" lastUpdated="January 7, 2026">
                    <section>
                        <h2>1. Information We Collect</h2>
                        <p>
                            We collect information to provide better services to all our users. The types of
                            information we collect include:
                        </p>
                        <ul>
                            <li><strong>Information you give us:</strong> Name, email address, phone number, and project details.</li>
                            <li><strong>Information we get from your use of our services:</strong> Log information, device information, and location information.</li>
                            <li><strong>Cookies and similar technologies:</strong> To improve user experience and analyze traffic.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>2. How We Use Information</h2>
                        <p>
                            We use the information we collect to:
                        </p>
                        <ul>
                            <li>Provide, maintain, and improve our services.</li>
                            <li>Develop new products and features.</li>
                            <li>Communicate with you regarding project updates or marketing materials.</li>
                            <li>Protect NextChainX and our users.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Information Sharing</h2>
                        <p>
                            We do not share personal information with companies, organizations, or individuals
                            outside of NextChainX unless one of the following circumstances applies:
                        </p>
                        <ul>
                            <li>With your explicit consent.</li>
                            <li>For external processing (e.g., cloud hosting providers).</li>
                            <li>For legal reasons (e.g., to meet any applicable law, regulation, or legal process).</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Data Security</h2>
                        <p>
                            We work hard to protect NextChainX and our users from unauthorized access to or
                            unauthorized alteration, disclosure, or destruction of information we hold.
                            We implement industry-standard security measures including encryption and secure
                            access controls.
                        </p>
                    </section>

                    <section>
                        <h2>5. Your Rights</h2>
                        <p>
                            You have the right to:
                        </p>
                        <ul>
                            <li>Access your personal data.</li>
                            <li>Request correction of inaccurate data.</li>
                            <li>Request deletion of your data.</li>
                            <li>Object to the processing of your data.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>6. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party sites. We are not responsible for the
                            privacy practices or content of these external sites.
                        </p>
                    </section>

                    <section>
                        <h2>7. Children's Privacy</h2>
                        <p>
                            Our services are not intended for individuals under the age of 13. We do not
                            knowingly collect personal information from children.
                        </p>
                    </section>

                    <section>
                        <h2>8. Changes to This Policy</h2>
                        <p>
                            Our Privacy Policy may change from time to time. We will post any privacy policy
                            changes on this page and, if the changes are significant, we will provide a more
                            prominent notice.
                        </p>
                    </section>

                    <section>
                        <h2>9. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at
                            privacy@nextchainx.com.
                        </p>
                    </section>
                </LegalLayout>
            </main>
            <Footer />
        </>
    );
}
