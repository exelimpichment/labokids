import * as React from 'react';
import Form from './form';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const ContactUsDialog = async ({ lang }: { lang: Locale }) => {
  const { formContent } = await getDictionary(lang);

  return (
    <div>
      <Form content={formContent} />
    </div>
  );
};

export default ContactUsDialog;
