import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications,CourseRegister } from "@/pages/student";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const studentRoutes = [
  {
    layout: "student",
    pages: [
      {
        icon:<ServerStackIcon {...icon} />,
        name: "My Courses",
        path: "/my-courses",
        element: <Home />,
      },{
        icon: <HomeIcon {...icon} />,
        name: "Register Course",
        path: "/course-register",
        element: <CourseRegister />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Attendance",
        path: "/attendance",
        element: <Tables />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Grades",
        path: "/grades",
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "Notifications",
        path: "/notifications",
        element: <Notifications />,
      },{
        icon: <InformationCircleIcon {...icon} />,
        name: "Logout",
        path: "/Logout",
        element: <Notifications />,
      }
    ],
  }
];

export default studentRoutes;
