import CommonDrawer from '@/components/Drawer';
import React from 'react';
import InputField from '@/components/InputField';

const CreateDeals = (props: any) => {
  const { isCreateOpen, setIsCreateOpen } = props;

  const handleSubmiter = () => {
    setIsCreateOpen(true);
  };

  return (
    <>
      {
        <CommonDrawer
          isDrawerOpen={isCreateOpen}
          setIsDrawerOpen={() => setIsCreateOpen(true)}
          title="Create Deal"
          okText={'Craete'}
          isOk={true}
          submitHandler={handleSubmiter}
        >
          <InputField
            name="DealName"
            placeholder={'Enter Name'}
            type={'text'}
            field={undefined}
            width={''}
            height={''}
            autoComplete={''}
            InputProps={undefined}
            hasError={undefined}
          />
          {/* <Select
            fullWidth
            multiple
            displayEmpty
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Placeholder</em>;
              }

              return selected.join(', ');
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled value="">
              <em>Placeholder</em>
            </MenuItem>
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}
          </Select> */}
          {/* 
          <Select
            fullWidth
            multiple
            displayEmpty
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Placeholder</em>;
              }
              return selected.join(', ');
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}
          </Select> */}
          {/* <InputField
            name="DealName"
            placeholder={"Enter Name"}
            type={"text"}
          /> */}
        </CommonDrawer>
      }
    </>
  );
};

export default CreateDeals;
