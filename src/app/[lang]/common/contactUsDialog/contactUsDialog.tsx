'use client';

import Modal from '@mui/material/Modal';
import * as React from 'react';
import { useGlobalContext } from '../../context/globalContext';
import Form from './form';

const ContactUsDialog = () => {
  const { contactUsDialogOpen, setContactUsDialog } = useGlobalContext();
  return (
    <Modal
      open={contactUsDialogOpen}
      onClose={() => setContactUsDialog(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex h-screen w-screen items-center justify-center "
    >
      <Form />
    </Modal>
  );
};

export default ContactUsDialog;
