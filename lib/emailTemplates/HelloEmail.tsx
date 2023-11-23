import { Button } from '@react-email/button';
import { Html } from '@react-email/html';
import * as React from 'react';

export default function HelloEmail() {
  return (
    <Html>
      <Button
        //        @ts-ignore
        pX={20}
        pY={12}
        href="https://example.com"
        style={{ background: '#000', color: '#fff' }}
      >
        Hello
      </Button>
    </Html>
  );
}
