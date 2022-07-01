import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Card from "../Card/Card";

const Calender = () => {
  const [value, onChange] = useState(new Date());
  return (
    <Card>
      <h3 className="text-3xl my-3 text-center">Calender</h3>
      <div className="mx-auto">
        <Calendar onChange={onChange} value={value} />
      </div>
    </Card>
  );
};

export default Calender;
