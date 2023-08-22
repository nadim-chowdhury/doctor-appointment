import { Form, Input } from "antd";
import { Link } from "react-router-dom";

export default function Login() {
  const onFinishHandler = (values) => {
    console.log(values);
  };

  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={onFinishHandler} className="card p-4">
        <h3 className="mb-4 bg-dark text-white text-center rounded px-4 py-2">
          Log in Form
        </h3>

        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>

        <button type="submit" className="btn btn-primary mb-4">
          Submit
        </button>

        <h5>
          Already Have An Account? &nbsp;
          <Link to="/signup" className="text-decoration-none">
            Sign up Here
          </Link>
        </h5>
      </Form>
    </div>
  );
}
