import { Card, Typography, Space } from 'antd';

const { Title, Paragraph } = Typography;

const PageContents = () => {
  return (
    <div style={{ padding: '24px', background: '#f0f2f5', minHeight: '100vh' }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card>
          <Title level={2}>Welcome to Your Application</Title>
          <Paragraph>
            This is the main content area. You can add your application content here.
          </Paragraph>
        </Card>
        
        <Card title="Sample Content">
          <Paragraph>
            This layout provides a clean structure with a side navigation bar and a main content area.
            The sidebar contains navigation items, and this area can be used for displaying different pages
            or components based on the selected navigation item.
          </Paragraph>
        </Card>
      </Space>
    </div>
  );
};

export default PageContents;