type Url = string;
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[];

type TUserId = string;

type TUser = {
  id: TProductId;
  name: string;
  surname: string;
  email: string;
  password: string;
};

type TAPIAVODetailResponse = TUser;

type TAPIAvoResponse = {
  length: number;
  data: TProduct[];
  error?: string;
};
