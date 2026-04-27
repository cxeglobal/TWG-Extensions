import '@shopify/ui-extensions/preact';
import { render } from 'preact';
import { useEffect, useState } from 'preact/hooks';

export default function extension() {
  render(<POField />, document.body);
}

function POField() {
  const settings = shopify.settings.current;
  const [value, setValue] = useState('');

  const heading     = settings?.heading     || 'Open Account';
  const description = settings?.description || 'Post this purchase to your Open Account.';
  const label       = settings?.field_label || 'PO Number';

  async function handleChange(event) {
    const val = event.target.value;
    setValue(val);
    if (val.trim()) {
      await shopify.applyAttributeChange({
        type: 'updateAttribute',
        key: 'po_number',
        value: val,
      });
    }
  }

  return (
    <s-stack direction="block" gap="base">
      <s-divider></s-divider>
      <s-heading level="2">{heading}</s-heading>
      <s-text appearance="subdued">{description}</s-text>
      <s-text-field
        label={label}
        value={value}
        onChange={handleChange}
      ></s-text-field>
    </s-stack>
  );
}