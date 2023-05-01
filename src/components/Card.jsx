const Card = (props) => {
  const handleClick = () => {
    props.remove(props.id);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl col-span-full lg:col-span-6 xl:col-span-4 2xl:col-span-3 mx-auto">
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.number}</p>
        <p>{props.type}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary " onClick={handleClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
