import { toast } from "react-hot-toast";
import { setLoading, setToken } from "../slices/authSlice";
import { endpoints } from "../apis";
import {apiConnector} from "../apiConnector";

const {
    SIGNUP_API,
    LOGIN_API,
} = endpoints;

export function signUp(
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    navigate
) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("POST", SIGNUP_API, {
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
            });

            if (!response.data.success) {
                throw new Error(response.data.message);
            }
            toast.success("Signup Successful");
            navigate("/login");
        } catch (error) {
            toast.error("Signup Failed");
            console.log(error);
            navigate("/signup");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    };
}

export function login(email, password, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        try {
            const response = await apiConnector("POST", LOGIN_API, {
                email,
                password,
            });

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            toast.success("Login Successful");
            dispatch(setToken(response.data.token));
            // dispatch(setUser({ ...response.data.user}));
            localStorage.setItem("token", JSON.stringify(response.data.token));
            // localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/dashboard");
        } catch (error) {
            toast.error("Login Failed");
            console.log(error);
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    };
}