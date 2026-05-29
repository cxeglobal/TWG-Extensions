import '@shopify/ui-extensions/preact';
import { render } from 'preact';
import { h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';

export default async () => {
  render(<PageExtension />, document.body);
};


function PageExtension() {
  const params = new URLSearchParams(window.location.search);
  const initialTab = params.get('tab') || 'invoices';

  const [activeTab, setActiveTab] = useState(initialTab);
  const [custNo, setCustNo] = useState('');
  const [custLoading, setCustLoading] = useState(true);
  const [custError, setCustError] = useState('');

  useEffect(() => {
    async function loadCustomer() {
      setCustLoading(true);
      setCustError('');
      try {
        const { custNo } = await fetchCustomerCustNo();
        setCustNo(custNo);
      } catch (e) {
        setCustError(e.message || 'Failed to load customer number.');
      }
      setCustLoading(false);
    }
    loadCustomer();
  }, []);

  return (
    <s-page heading="My Account">
      <s-stack direction="inline" gap="base" blockAlignment="center">
        <s-button kind={activeTab === 'orders' ? 'primary' : 'secondary'} onClick={() => { window.location.href = 'shopify:customer-account/orders'; }}>Orders</s-button>
        <s-button kind={activeTab === 'profile' ? 'primary' : 'secondary'} onClick={() => { window.location.href = 'shopify:customer-account/profile'; }}>Profile</s-button>
        <s-button kind={activeTab === 'invoices' ? 'primary' : 'secondary'} onClick={() => setActiveTab('invoices')}>Invoices</s-button>
        <s-button kind={activeTab === 'statements' ? 'primary' : 'secondary'} onClick={() => setActiveTab('statements')}>Statements</s-button>
        <s-button kind={activeTab === 'password' ? 'primary' : 'secondary'} onClick={() => setActiveTab('password')}>Update Password</s-button>
      </s-stack>

      <s-divider />

      {custLoading && <s-banner status="info"><s-text>Loading customer details...</s-text></s-banner>}
      {custError && <s-banner status="critical"><s-text>{custError}</s-text></s-banner>}

      {!custLoading && !custError && activeTab === 'invoices' && <InvoicesTab custNo={custNo} />}
      {!custLoading && !custError && activeTab === 'statements' && <StatementsTab custNo={custNo} />}
      {activeTab === 'password' && <PasswordUpdate />}
    </s-page>
  );
}


