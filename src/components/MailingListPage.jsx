import React, { useRef, useState, useCallback } from "react";
import useAPI from "../hooks/useAPI";

function MailingListPage() {
  const emailInput = useRef(null);
  const { signUp } = useAPI();
  const [err, setErr] = useState("");
  const handleSignup = useCallback(async () => {
    const emailAdd = emailInput.current.value;
    if (
      emailAdd.length < 6 ||
      emailAdd.length > 30 ||
      !emailAdd.includes("@")
    ) {
      return;
    }
    const json = await signUp(emailAdd);
    if (!json.success) {
      setErr(json.error);
    } else {
      return;
    }
  });
  return (
    <form className="center">
      <label htmlFor="email">
        Enter your email here to sign up for our mailing list
      </label>
      <br />
      <input
        id="email"
        type="text"
        ref={emailInput}
        placeholder="somebody@something.com"
      />
      <br />
      <br />
      <button onClick={handleSignup}>Add</button>
    </form>
  );
}

export default MailingListPage;
