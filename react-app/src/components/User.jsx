const User = ({ item , deleteCunny }) => {
  return (
    <div>
      <li>
        <p>{item.name}</p>
        <p>{item.school}</p>
        <button onClick={() => deleteCunny(item.id)}>Delete</button>
      </li>
    </div>
  );
};

export default User;
