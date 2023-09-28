export const Registration = () => {
  return (
    <div>
      <h1>Registration</h1>
      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            title="Need to add email using this format 'email@email.com'"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            title="add you password"
            required
          />
        </label>
        <button type="submit">Registrate</button>
      </form>
    </div>
  );
};
