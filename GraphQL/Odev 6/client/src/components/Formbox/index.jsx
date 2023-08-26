import styles from './styles.module.css'
import {DatePicker, Button, Form, Input, TimePicker, Col, Row, message } from 'antd';
import { useMutation } from '@apollo/client';
import { CREATE_EVENT } from './queries';
import Location from './Location';
import User from './User';
import { createRef } from 'react';

const formRef = createRef();

const dateFormat = 'DD/MM/YYYY';

function Formbox() {
  const [createEvent, { loading }] = useMutation(CREATE_EVENT);

  const onFinish = async ({ date, from, to, title, desc, location_id, user_id }) => {
    const formattedValues = {
      title,
      desc,
      date: date.format("YYYY-MM-DD"),
      from: from.format("HH:MM"),
      to: to.format("HH:MM"),
      location_id,
      user_id
    };
    try{
      await createEvent({ variables: { data: formattedValues } });
      message.success("Event added!", 5)
      formRef.current.resetFields()
    }catch(err){
      console.log(err)
      message.error("Event not added!", 5)
    }
  };

  return (
    <div className={styles.formWrapper}>
      <Form
        disabled={loading}
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        ref={formRef}
      >
        <Form.Item
          name="title"
          label="Title:"
          rules={[
            {
              required: true,
              message: 'Please input a title',
            },
          ]}
        >
          <Input placeholder="Enter event title" />
        </Form.Item>

        <Form.Item
          name="desc"
          label="Description:"
          rules={[
            {
              required: true,
              message: 'Please enter a description',
            },
          ]}
        >
          <Input placeholder="Enter event description" />
        </Form.Item>

        <Row gutter={24} justify="space-between">
          <Col span={8}>
            <Form.Item
            name="date"
            label="Event Date:"
            rules={[
              {
                required: true,
                message: 'Please input a date',
              },
            ]}
          >
            <DatePicker
              format={dateFormat}
            />
          </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="from" label="From">
              <TimePicker/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="to" label="To">
              <TimePicker />
            </Form.Item>
          </Col>
        </Row>
        
        <Row gutter={24} justify="space-between">
          <Location />
          <User />
        </Row>

        <Form.Item>
          <Button loading={loading} type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>

    </div>
  )
}

export default Formbox