const Card = ({ children }) => {
  return (
    <div className="max-w-md mx-auto my-8">
      <div className="card w-full bg-base-100 shadow-xl my-4">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Card;
