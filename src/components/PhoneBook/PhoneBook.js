import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';

import { Field, Form, BtnSubmit, ErrorMessage } from './PhoneBook.styled';

const PhoneBookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  filter: '',
});

export const PhoneBook = ({ onSabmit }) => {
  return (
    <>
      <Formik
        initialValues={{ name: '', number: '', filter: '' }}
        validationSchema={PhoneBookSchema}
        onSubmit={(values, actions) => {
          onSabmit({ ...values, id: nanoid(), number: values.number });
          actions.resetForm();
        }}
      >
        <Form>
          <label htmlFor="name" type="text" name="name"></label>
          <Field
            htmlFor="name"
            placeholder="Name"
            id="name"
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />

          <label htmlFor="number" type="tel" name="number" id="number"></label>
          <Field
            htmlFor="number"
            id="number"
            placeholder="Number"
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="div" />
          <BtnSubmit type="submit">Add Contacts</BtnSubmit>
        </Form>
      </Formik>
    </>
  );
};

PhoneBook.propTypes = {
  onSabmit: PropTypes.func.isRequired,
};
