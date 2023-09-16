import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Section } from 'components/Section';
import  {AddContactForm}  from '../components/ContactForm/ContactForm';
import { Filter } from 'components/Filter';
import { ContactsList } from 'components/ContactsList';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);

  return (
    <>
      <Section className="addContactSection" title="Phonebook">
        <AddContactForm />
      </Section>
      {isLoading && !error && <p className="message">Loading contacts...</p>}
      {error && (
        <p style={{ textAlign: 'center', color: 'red' }}>
          Ooops! Something went wrong, please try again...
        </p>
      )}
      {contacts.length !== 0 && (
        <Section className="contactListSection" title="Contacts">
          <Filter />
          <ContactsList />
        </Section>
      )}
    </>
  );
};

export default ContactsPage;
