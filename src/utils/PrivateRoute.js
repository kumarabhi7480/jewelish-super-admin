import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useUserProfileQuery } from "../services/authApi";

function PrivateRoute() {
  const navigate = useNavigate();
  const { error: isError } = useSelector(state=>state.auth);
  console.log(isError);
  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  return <Layout />;
}

export default PrivateRoute;
