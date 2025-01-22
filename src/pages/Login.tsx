// /*eslint-disable @typescript-eslint/no-explicit-any*/
// import { Button } from "antd";
// import { FieldValues, useFormContext } from "react-hook-form";
// import { useLoginMutation } from "../redux/features/auth/authApi";
// import { useAppDispatch } from "../redux/hooks";
// import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";
// import PHForm from "../components/form/PHForm";
// import PHInput from "../components/form/PHInput";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();
//   const { register, handleSubmit } = useForm({
//     defaultValues: {
//       userId: "A-0001",
//       password: "admin",
//     },
//   });

//   const { register } = useFormContext();

//   const [login] = useLoginMutation();

//   const onSubmit = async (data: FieldValues) => {
//     const toastId = toast.loading("Loging in...");
//     console.log(data);

//     try {
//       const userInfo = {
//         id: data.userId,
//         password: data.password,
//       };
//       const res = await login(userInfo).unwrap();
//       const user = verifyToken(res.data.accessToken) as TUser;
//       dispatch(setUser({ user: user, token: res.data.accessToken }));
//       navigate(`/${user.role}/dashboard`);
//       toast.success("Login Successfull", { id: toastId, duration: 2000 });
//     } catch (err) {
//       toast.error("Something went wrong!", { id: toastId, duration: 2000 });
//     }
//   };

//   return (
//     <PHForm onSubmit={onSubmit}>
//       <div>
//         <PHInput type={"text"} name={"id"} label={"ID"} />
//       </div>
//       <div>
//         <PHInput type={"text"} name={"password"} label={"password"} />
//       </div>
//       <Button htmlType="submit">Login</Button>
//     </PHForm>
//   );
// };

// export default Login;


import { Button, Row } from 'antd';
import { FieldValues } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { TUser, setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PHForm from '../components/form/PHForm';
import PHInput from '../components/form/PHInput';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: 'A-0002',
  //     password: 'admin123',
  //   },
  // });

  const defaultValues = {
    userId: 'A-0001',
    password: 'admin',
  };

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading('Logging in');

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success('Logged in', { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="userId" label="ID:" />
        <PHInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
