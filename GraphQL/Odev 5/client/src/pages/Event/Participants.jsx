import { Form, Select } from 'antd';
import { PARTICIPANT_SUBSCRIPTION, GET_PARTICIPANTS } from './queries'
import styles from './styles.module.css'
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import PropTypes from 'prop-types';


function Participants({ id }) {
    const { Option } = Select;

    const { loading, error, data, subscribeToMore } = useQuery(GET_PARTICIPANTS,
        { variables: { id } }
    );

    useEffect(() => {
        subscribeToMore({
            document: PARTICIPANT_SUBSCRIPTION,
            variables: { id },
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                return {
                    event: [
                        prev,
                        subscriptionData.data
                    ]
                }
            }
        })
    }, [subscribeToMore, id])

    return (
        <div className={styles.participantSection}>
            <span className='title'>Participants</span>
            <br />
            <Form>
                <Form.Item name="gender">
                    <Select
                        placeholder="Select a option and change input text above"
                    >
                    {
                        !loading && !error && data.event.participants.map((participant, id) => <Option key={id} value={participant.id}>{participant.username}</Option>)
                    }
                    </Select>
                </Form.Item>
            </Form>
        </div>
    )
}

Participants.propTypes = {
    id: PropTypes.string.isRequired
};

export default Participants