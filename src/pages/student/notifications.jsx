import React, { useEffect, useState } from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import alertsData from "@/data/alerts-data";

export function Notifications() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Fetch alerts from the data file
    setAlerts(alertsData);
  }, []);

  return (
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
      <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Notice Board
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
          {alerts.map((alert, index) => (
            <Alert
              key={index}
              open={alert.isOpen}
              color={alert.color}
              onClose={() =>
                setAlerts((current) =>
                  current.map((a, i) =>
                    i === index ? { ...a, isOpen: false } : a
                  )
                )
              }
            >
              {alert.message}
            </Alert>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}

export default Notifications;
