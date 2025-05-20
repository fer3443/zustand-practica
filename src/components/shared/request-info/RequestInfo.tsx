import React, { useEffect } from "react";
import { tesloApi } from "../../../api/tesloApi";

export const RequestInfo = () => {
  const [requestInfo, setRequestInfo] = React.useState<unknown>();
  useEffect(() => {
    tesloApi
      .get("/auth/private")
      .then((res) => setRequestInfo(res.data))
      .catch(() => setRequestInfo("Error"));
  }, []);
  return (
    <>
      <h2>Informacion</h2>
      <pre>{JSON.stringify(requestInfo, null, 2)}</pre>
    </>
  );
};
