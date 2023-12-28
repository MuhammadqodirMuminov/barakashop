

export interface IPayment {
  payment_id:     number;
  payment_amount: number;
  payment_status: string;
  payment_card:   string;
  payed_date:     null;
  created_at:     string;
  updated_at:     string;
  user_id:        UserID;
}

export interface UserID {
  id:               number;
  username:         string;
  password:         string;
  role:             string;
  phone:            string;
  email:            string;
  telegram_chat_id: number;
  avatar:           string;
  created_at:       string;
  updated_at:       string;
}