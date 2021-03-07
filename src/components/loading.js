import { Spin } from "antd";

const Loading = () => {
  return (
    <div
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        width: '100vw', height: '100vh'
      }}
    >
      <Spin size="large" tip="Loading..."></Spin>
    </div>
  );
};

export default Loading;
