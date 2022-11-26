import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";


export const users = [
  {
    _id:uuid(),
    username: "Gautam",
    email: "abc@gmail.com",
    password: "abc123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
