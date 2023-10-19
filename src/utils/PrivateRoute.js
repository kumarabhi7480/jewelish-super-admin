import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import { useEffect } from "react";
// import { useUserProfileQuery } from "../services/authApi";

function PrivateRoute() {
//   const navigate = useNavigate();
//   const { isError } = useUserProfileQuery();
//   console.log(isError);
//   useEffect(() => {
//     if (isError) {
//       navigate("/login");
//     }
//   }, [isError, navigate]);

  return <Layout />;
}

export default PrivateRoute;
