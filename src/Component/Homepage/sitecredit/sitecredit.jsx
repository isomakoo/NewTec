import React, { useState } from 'react';
import { Modal, Form, Input, Button, Radio } from 'antd'; // Importing required components from Ant Design

const SiteCreationModal = ({ isVisible, onClose }) => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});

  // Handle form submission
  const handleSubmit = (values) => {
    console.log('Form values:', values);
    setFormData(values);
    onClose(); // Close the modal after submission
  };

  return (
    <Modal
      title="Создание сайта"
      visible={isVisible}
      onCancel={onClose}
      footer={null}
      className="site-creation-modal"
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="name"
          label="Ваше имя"
          rules={[{ required: true, message: 'Пожалуйста, введите ваше имя!' }]}
        >
          <Input placeholder="Введите ваше имя" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Телефонный номер"
          rules={[{ required: true, message: 'Пожалуйста, введите ваш телефонный номер!' }]}
        >
          <Input placeholder="Введите ваш телефонный номер" />
        </Form.Item>
        <Form.Item
          name="websitePurpose"
          label="Цель сайта"
          rules={[{ required: true, message: 'Пожалуйста, выберите цель вашего сайта!' }]}
        >
          <Radio.Group>
            <Radio value="businessDevelopment">Развитие бизнеса</Radio>
            <Radio value="personalBlog">Личный блог</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="job"
          label="Ваша работа"
          rules={[{ required: true, message: 'Пожалуйста, введите вашу работу!' }]}
        >
          <Input placeholder="Введите вашу работу" />
        </Form.Item>
        <Form.Item
          name="comments"
          label="Комментарии"
        >
          <Input.TextArea placeholder="Добавьте комментарии" rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SiteCreationModal;
