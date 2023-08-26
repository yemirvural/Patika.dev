import { Form, Col, Select } from 'antd';
import { GET_LOCATIONS } from './queries';
import { useQuery } from '@apollo/client';

function Location() {
    const { Option } = Select;

    const { loading, error, data } = useQuery(GET_LOCATIONS);

    return (
    <Col span={12}>
        <Form.Item name="location_id" label="Location">
            <Select
                placeholder="Select a location"
            >
            {
               !loading && !error && data.locations.map((location, id) => <Option key={id} value={location.id}>{location.name}</Option>)
            }
            </Select>
        </Form.Item>
    </Col>
  )
}

export default Location