export interface ILoginInput {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  token: string;
  username: string;
  channelDescription?: string;
  avatar?: string;
}

export type LoginPayload = {
  user?: IUser;
};
