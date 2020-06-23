import React from "react";
import { Row, Col } from "antd";
import Markdown from "markdown-to-jsx";
const ArticleContent = (props) => {

  const md = `
    # DatePicker

    The DatePicker works by supplying a date to bias towards,
    as well as a default timezone.

    Here's an example of a DatePicker pre-set to only the month of December:

    `;
  return (
    <Col
      lg={{ span: 14, offset: 2 }}
      md={{ span: 14, offset: 2 }}
      xs={{ span: 22, offset: 1 }}
      sm={{ span: 20, offset: 2 }}
    >
      <Markdown children={md} options={{ forceBlock: true,slugify: (str) => str }}>
        ##aaaaa
        
        ```js 
        console.log(1) 
        ```


        * abcsda *

        **abb**

        * ASSASAS *
      </Markdown>
    </Col>
  );
};

export default ArticleContent;
