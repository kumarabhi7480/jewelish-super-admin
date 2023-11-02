import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadUser } from "../redux/Actions/Auth";
// import { useUserProfileQuery } from "../services/authApi";

function PrivateRoute() {
  const navigate = useNavigate();
 const  dispatch = useDispatch();
  const { isError } = useSelector(state=>state.auth);
  console.log(isError);
  useEffect(() => {
    dispatch(loadUser())
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  return <Layout />;
}

export default PrivateRoute;
