import { User } from "../../domain/user";
import { state } from "../store";

type UserStateType = {
  user: User | undefined;
};

export const UserState: UserStateType = {
  user: undefined,
};

export const updateUser = (user: User) => {
  state.user = user;
};

export default UserState;
