import React,{useState} from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const Search = (props) => {
  const [iputValue, setiputValue] = useState(void 0);
  return (
    <Form className="zy-flex-center">
      <Form.Item name="searchText">
        <Input
          // ref={(ref) => (setiputValue(ref.props.value))}
          style={{ height: 40, borderRadius: "7px 0 0 7px" }}
          placeholder="搜索"
          name="searchText"
          prefix={<i className="fa fa-edit fa-lg fa-fw"></i>}
        />
      </Form.Item>
      <Form.Item>
        <Link
          to={"/blog/find/article/search/" +iputValue}
        >
          <Button
            htmlType="submit"
            type="primary"
            style={{ height: 40, borderRadius: "0 7px 7px 0" }}
          >
            <i className="fa fa-search fa-fw fa-lg" />
          </Button>
        </Link>
      </Form.Item>
    </Form>
  );
};

export default Search;
