import { Form, Col, Select } from 'antd';
import { GET_USERS } from './queries';
import { useQuery } from '@apollo/client';

function User() {
  const { Option } = Select;

  const { loading, error, data } = useQuery(GET_USERS);
  
  return (
    <Col span={12}>
        <Form.Item name="user_id" label="User">
            <Select
                placeholder="Select a User"
            >
            {
               !loading && !error && data.users.map((user, id) => <Option key={id} value={user.id}>{user.username}</Option>)
            }
            </Select>
        </Form.Item>
    </Col>
  )
}

export default User