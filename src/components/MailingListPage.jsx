import React, { useRef, useState, useCallback } from "react";
import useAPI from "../hooks/useAPI";

function MailingListPage() {
  const emailInput = useRef(null);
  const { signUp } = useAPI();
  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");

  const handleSignup = useCallback(async (e) => {
    //prevents page from refreshing so message/error does not disappear
    e.preventDefault();

    const email_address = emailInput.current.value;

    setErr("");
    if (
      email_address.length < 6 ||
      email_address.length > 30 ||
      !email_address.includes("@")
    ) {
      setErr("Invalid email address");
      return;
    }
    const json = await signUp(email_address);
    if (!json.success) {
      setErr(json.error);
    } else {
      setMsg("Thanks for signing up!");
      return;
    }
  });
  return (
    <form className="center site padding-1">
      <div className="padding-1">
        <label htmlFor="email">
          <h4>Enter your email here to sign up for our mailing list</h4>
        </label>
      </div>

      <input
        id="email"
        type="text"
        ref={emailInput}
        placeholder="somebody@something.com"
      />
      <br />
      <br />
      <button onClick={handleSignup}>Sign up</button>
      <h4>{err}</h4>
      <h4>{msg}</h4>
    </form>
  );
}

export default MailingListPage;
