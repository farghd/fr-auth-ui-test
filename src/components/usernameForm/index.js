export const UsernameForm = ({ handler, setter }) => {
  return (
    <form onSubmit={handler}>
      <input onChange={(e) => setter(e.target.value)} />
    </form>
  );
};
