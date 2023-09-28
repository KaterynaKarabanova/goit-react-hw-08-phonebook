export const LogIn = () => {
  return (
    <div>
      <h1>LogIn</h1>
      <form>
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
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};
