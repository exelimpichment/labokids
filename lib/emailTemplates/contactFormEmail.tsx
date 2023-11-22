import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
  Link,
} from '@react-email/components';
import * as React from 'react';

interface IContactFormEmail {
  phone: string;
  email: string;
  message: string;
}

export const ContactFormEmail = ({
  phone,
  email,
  message,
}: IContactFormEmail) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hi Małgorzata!</Text>

        <Text style={paragraph}>
          Nowy potencjalny klient jest zainteresowany Twoją usługą. Proszę,
          znajdź szczegóły poniżej:
        </Text>
        <Text style={paragraph}>{phone}</Text>
        <Text style={paragraph}>{email}</Text>
        <Text style={paragraph}>
          {message === ''
            ? 'Osoba nie zostawiła żadnej wiadomości. Proszę skontaktować się z nią.'
            : message}
        </Text>

        <Hr style={hr} />
        <Text style={footer}>
          from{' '}
          <Link style={anchor} href="https://www.labokids.pl/">
            labokids.pl
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const anchor = {
  textDecoration: 'underline',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
