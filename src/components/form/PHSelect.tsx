import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

type TPHSelectProps = {
  label: string;
  name: string;
  disabled?:boolean;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
};

const PHSelect = ({ label, name, options,disabled }: TPHSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
          disabled={disabled}
            style={{ width: '100%' }}
            {...field}
            options={options}
            size="large"
          />
          {error && <small style={{ color: 'red' }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
