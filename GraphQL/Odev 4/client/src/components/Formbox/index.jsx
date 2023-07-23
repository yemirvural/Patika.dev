import styles from './styles.module.css'
import { Button, Form, Input } from 'antd';
import { DatePicker } from 'antd';

const dateFormat = 'DD/MM/YYYY';

function Formbox() {
  return (
    <div className={styles.formWrapper}>
      <Form
        layout="vertical"
      >
        <Form.Item
          label="Title:"
        >
          <Input placeholder="Enter event title" />
        </Form.Item>

        <Form.Item
          label="Description:"
        >
          <Input placeholder="Enter event description" />
        </Form.Item>

        <Form.Item
          label="Event Date:"
        >
          <DatePicker
            format={dateFormat}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary">Add Event</Button>
        </Form.Item>
      </Form>

    </div>
  )
}

export default Formbox