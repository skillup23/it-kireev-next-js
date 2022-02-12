import Heading from "./Heading";

const ContactInfo = ({ contact }) => {
  const { name, email, adress } = contact || {};
  const { street, suite, city, zipcode } = adress || {};

  if (!contact) {
    return <Heading tag="h3" text="Пустой контакт" />
  }

  return (
    <>
      <Heading tag="h3" text={name} />
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Adress: </strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
}

export default ContactInfo;