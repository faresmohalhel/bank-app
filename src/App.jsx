import Form from "./Form";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Fragment, useEffect, useState } from "react";

const initialState = [
  {
    id: 1,
    customerName: "Israa Othman",
    accountNumber: "123456",
    accountType: "Savings",
  },
  {
    id: 2,
    customerName: "Ahmad Zahran",
    accountNumber: "987654",
    accountType: "Student account",
  },
];

const Main = (props) => {
  return (
    <div className="grid grid-cols-12 gap-x-16 gap-y-4 items-center justify-center w-screen lg:max-w-[80vw] mx-auto pb-24">
      {props.accounts.map((account) => {
        return (
          <Card
            key={account.id}
            id={account.id}
            name={account.customerName}
            number={account.accountNumber}
            type={account.accountType}
            remove={props.remove}
          />
        );
      })}
    </div>
  );
};

function App() {
  const [accounts, setAccounts] = useState(initialState);

  const handleUpdate = (newAccount) => {
    setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
  };

  const handleRemove = (id) => {
    setAccounts(accounts.filter((item) => item.id !== id));
  };

  useEffect(() => {});

  return (
    <Fragment>
      <Navbar />
      <Form update={handleUpdate} />
      <Main accounts={accounts} remove={handleRemove} />
      <Footer />
    </Fragment>
  );
}

export default App;
