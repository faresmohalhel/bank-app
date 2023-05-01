const Form = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    const newAcc = {
      id: Math.random(),
      customerName: event.target.name.value,
      accountNumber: event.target.number.value,
      accountType: event.target.type.value,
    };
    props.update(newAcc);
  };

  return (
    <form
      className="flex flex-col gap-6 mx-auto items-center justify-center min-h-[70vh]"
      onSubmit={submitHandler}
    >
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Enter your name</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Account number</span>
        </label>
        <input
          id="number"
          type="number"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Choose account type</span>
        </label>
        <select
          className="select select-bordered"
          id="type"
          defaultValue="null"
        >
          <option disabled value="null">
            Pick one
          </option>
          <option value="Savings">Savings</option>
          <option value="Students Accounts">Students Accounts</option>
        </select>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
