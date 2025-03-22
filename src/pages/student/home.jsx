import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  Tooltip,
  Button,
  Progress,
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  studentCoursesData,
  ordersOverviewData,
} from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";





export function MyCourses() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <div className="mt-10">
      <Typography variant="h5" color="blue-gray " className="mb-2" >
        Welcome Back Student
      </Typography>

      {/* cards for the student registred courses */}
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                My Courses
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                <CheckCircleIcon strokeWidth={3} className="h-4 w-4 text-blue-gray-200" />
                <strong>30 done</strong> this month
              </Typography>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            {/* new table :  */}
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["courses", "completion", "Log in to class"].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-6 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-medium uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {studentCoursesData.map(({ img, course, completion }, key) => {
                  const className = `py-3 px-5 ${key === studentCoursesData.length - 1 ? '' : 'border-b border-blue-gray-50'}`;
                  return (
                    <tr key={course}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={course} size="sm" />
                          <Typography variant="small" color="blue-gray" className="font-bold">
                            {course}
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        <div className="w-10/12">
                          <Typography variant="small" className="mb-1 block text-xs font-medium text-blue-gray-600">
                            {completion}%
                          </Typography>
                          <Progress
                            value={completion}
                            variant="gradient"
                            color={completion === 100 ? 'green' : 'blue'}
                            className="h-1"
                          />
                        </div>
                      </td>
                      <td className={className}>
                        <Button onClick={handleOpen} className=" text-xs font-medium">
                          Log in to class
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="paragraph">
              Looking for a New course?
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <a href="/student/course-register"><Button>Register Here</Button></a>
          </CardFooter>
        </Card>
      </div>

      {/* charts for the student */}
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Mark Attendance</DialogHeader>
        <DialogBody>
        Your location will be captured to verify your presence for attendance. Make sure you are near the designated location.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>




    </div >
  );
}

export default MyCourses;
