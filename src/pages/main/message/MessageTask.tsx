// MessageTask.tsx
import React from 'react';
import { Avatar, Typography } from 'antd';
import MessageList from './MessageList';
import styles from './MessageSystem.module.css';
import moment from 'moment';
const MessageTask: React.FC = () => {
  const renderAvatar = (item: any) => (
    <Avatar src={item.avatar} />
  );

  const { Text } = Typography;
  const renderTitle = (item: any) => (
    <div className={styles['meta-title']}>
      <Text> {item.senderName}</Text>
      <Text className={styles['project-name']}>
        {!item.isRead && <div className={styles['unread-dot']}
          style={{ float: 'left', marginTop: "5px" }} />}
        {item.projectName}
      </Text>
      <Text type="secondary" className={styles.time}>
        {moment(item.timestamp).fromNow()}
      </Text>
    </div>
  );

  return (
    <MessageList
      title="指派任务"
      messageType="designate"
      receiverId={3}
      messageTypeCode={1}
      renderAvatar={renderAvatar}
      renderTitle={renderTitle}
    />
  );
};

export default MessageTask;