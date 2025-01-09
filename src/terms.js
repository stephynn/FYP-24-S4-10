import React from 'react';

const TermsOfService = () => {
  return (
    <div style={styles.container}>
      <div style={styles.terms}>
        <h1>Terms of Service</h1>
        <p>Effective Date: January 5, 2025</p>
        
        <section>
          <h2>Introduction</h2>
          <p>These Terms of Service govern your use of PeakFit. By accessing our platform, you agree to these terms.</p>
        </section>
        
        <section>
          <h2>User Responsibilities</h2>
          <p>You must provide accurate information and follow our guidelines when using PeakFit services.</p>
        </section>

        <section>
          <h2>Subscription & Payments</h2>
          <p>PeakFit offers subscription plans. Payments are non-refundable unless otherwise stated.</p>
        </section>

        <section>
          <h2>Account Management</h2>
          <p>Keep your account secure and notify us of any unauthorized access.</p>
        </section>

        <section>
          <h2>Liability & Disclaimers</h2>
          <p>PeakFit is not liable for any damages arising from the use of the service.</p>
        </section>

        <section>
          <h2>Privacy</h2>
          <p>Your privacy is important to us. Please review our <a href="/privacy-policy">Privacy Policy</a> for more information.</p>
        </section>

        <section>
          <h2>Termination</h2>
          <p>We may suspend or terminate your account for violations of these terms.</p>
        </section>

        <section>
          <h2>Dispute Resolution</h2>
          <p>All disputes shall be resolved through binding arbitration.</p>
        </section>

        <section>
          <h2>Modifications</h2>
          <p>We may update these terms. Users will be notified of significant changes.</p>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
  },
  terms: {
    width: '100%',
    maxWidth: '800px',
    backgroundColor: '#f9f9f9',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  h1: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '20px',
  },
  h2: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
};

export default TermsOfService;
