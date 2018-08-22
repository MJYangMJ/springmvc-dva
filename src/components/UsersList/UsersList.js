import React from 'react'
import PropTypes from 'prop-types';
import { Table, Divider, Icon, Popconfirm, Button, Input, Form } from 'antd';

const FormItem = Form.Item

const MyAddForm = ({ onAdd, form }) => {

  function handleSubmit(e){
    console.log("you are inserting a new user!");
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        onAdd(values);
      }
    });
    e.preventDefault();
  };

  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = form;


  return (
    <Form onSubmit={(e) => handleSubmit(e)} >
      <FormItem>
        {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type='text' name='name'/>
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('gender', {
            rules: [{ required: true, message: 'Please input your gender!' }],
          })(
          <Input prefix={<Icon type="skin" style={{ color: 'rgba(0,0,0,.25)' }} />} type='text' name='gender'/>
        )}
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">
          Add New One
        </Button>
      </FormItem>

    </Form>
  )
}

const MyAddUserForm = Form.create()(MyAddForm)

const UsersList = ({ users, onDelete, onAdd }) => {

    const columns = [
      // {
      //   title: 'Avatar',
      //   dataIndex: 'avatar',
      //   key: 'avatar',
      //   width: 74,
      //   // style: {img{border-radius: 50%,}},
      //   // render: text => <img alt="avatar" width={24} src={text} />,
      // },
      {
        title: 'id',
        dataIndex: 'id',
      },
      {
        title: 'name',
        dataIndex: 'name',
      },
      {
        title: 'gender',
        dataIndex: 'gender',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record, ) => {
          function clickToDelete(id){
            onDelete(id)
          }
          return (
          //render has three variables,text and record is same so far,index begin from 0,just like the list insert
            <span>
              <a href="javascript:void(0);">Action 一 {text.name}</a>
              <Divider type="vertical" />
              <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                <Button>Delete</Button>
              </Popconfirm>
              <Divider type="vertical" />
              {/*<a href="javascript:void(0);" onClick={clickToDelete(text.id)} >Delete</a>*/}
              <Divider type="vertical" />
              <a href="javascript:void(0);" className="ant-dropdown-link">
                More actions <Icon type="down" />
              </a>
            </span>
        )},
      }
    ];

  return (
    <>
      <Table bordered dataSource={users} columns={columns} />
      <MyAddUserForm onAdd={onAdd} />
    </>
  )
}

export default UsersList;
