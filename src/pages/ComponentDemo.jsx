import { useState } from "react";

import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../components/ui";

function ComponentDemo() {

  const [open, setOpen] = useState(false);

  return (
    <div className="p-10">

      <h1 className="text-3xl mb-6">
        UI Components Demo
      </h1>

      <Button
        text="Primary Button"
      />

      <br /><br />

      <Input
        label="Email"
        placeholder="Enter Email"
      />

      <Button
        text="Open Modal"
        onClick={() => setOpen(true)}
      />

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="StaySage Modal"
      >

        <p>Hello from Modal!</p>

      </Modal>

      <br />

      <Toast
        message="Booking Successful"
      />

      <br />

      <Loader />

    </div>
  );
}

export default ComponentDemo;