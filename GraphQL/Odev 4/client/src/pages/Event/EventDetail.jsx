import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_EVENT } from './queries'
import { Descriptions } from 'antd';
import styles from './styles.module.css'

function EventDetail() {
  let { id } = useParams();

  const { loading, error, data } = useQuery(GET_EVENT, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div >        
      <span className='title'>Event Info</span>
      <Descriptions className={styles.descriptions} bordered>
        <Descriptions.Item label="Title">{data.event.title}</Descriptions.Item>
        <Descriptions.Item label="Date">{data.event.date} ({data.event.from}-{data.event.to})</Descriptions.Item>
        <Descriptions.Item label="Location-No">{data.event.location_id}</Descriptions.Item>
        <Descriptions.Item label="Address">{data.event.location.name}</Descriptions.Item>
        <Descriptions.Item label="Contact">{data.event.user.email}</Descriptions.Item>
      </Descriptions>
      <div className='description'>
        <span className='title'>Description</span>
        <br />
        {data.event.desc}
      </div>
    </div>
  )
}

export default EventDetail