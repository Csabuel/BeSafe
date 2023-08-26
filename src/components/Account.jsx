import React from "react";
import { AiOutlineMail } from "react-icons/ai";

function Account() {
  return (
    <div>
      <div>
        <form>
          <div>
            <label>Email</label>
            <div>
              <input type="email" />
              <AiOutlineMail />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Account;
